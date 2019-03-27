import * as Typography from "typography"
import fairyGatesTheme from "typography-theme-fairy-gates"

const typography = new (Typography as any)(fairyGatesTheme)

export default typography
export const rhythm = typography.rhythm
