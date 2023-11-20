import gulp  from 'gulp'
import { removeDist, buildComponent } from './index.js'

const { series } = gulp

export default series(
  removeDist,
  buildComponent,
)
