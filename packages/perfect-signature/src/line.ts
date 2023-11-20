interface linesType {
  points: any;
}

export default class Line {
  constructor() {}
  lines: linesType[] = [];
  currentPoint = {};
  lastPoint = {};
  offsetLeft = 0;
  offsetTop = 0;

  get getLatestLine() {
    return this.lines[this.lines.length - 1];
  }

  get getLatestPoints() {
    if (this.getLatestLine) return this.getLatestLine.points;
    return [];
  }
  /**
   * 添加点位信息
   * @param l
   */
  pushLine(l: linesType) {
    this.lines.push(l);
    this.currentPoint = l.points[0];
  }
  /**
   * 添加点位信息
   * @param {x, y}
   */
  pushLatestPoint(xy: any) {
    this.getLatestLine.points.push(xy);
    const dis = Line.distance(xy, this.lastPoint);
    this.currentPoint = { dis, ...xy };
  }
  /**
   * 通过二次贝塞尔曲线 减少折断
   * 返回控制点
   */
  getControlPoints() {
    const points = this.getLatestPoints;
    const t = 0.5;
    const tThird = points[points.length - 3]; // 最后第三点
    const tSecond = points[points.length - 2]; // 最后第二个点
    const end = points[points.length - 1]; // 最后一个点
    const x0 = tSecond.x,
      y0 = tSecond.y;
    const x1 = tThird.x,
      y1 = tThird.y;
    const x2 = end.x,
      y2 = end.y;
    // var dis = 0;
    // var time = line.time - tThird.time + (end.time - line.time);
    // dis = line.dis + tThird.dis + end.dis;
    const cx =
      (x0 - Math.pow(1 - t, 2) * x1 - Math.pow(t, 2) * x2) / (2 * t * (1 - t));
    const cy =
      (y0 - Math.pow(1 - t, 2) * y1 - Math.pow(t, 2) * y2) / (2 * t * (1 - t));
    return [
      { x1, y1 },
      { x2, y2 },
      { cx, cy },
    ];
  }

  static distance(a: any, b: any) {
    var x = b.x - a.x;
    var y = b.y - a.y;
    return Math.sqrt(x * x + y * y);
  }
}
