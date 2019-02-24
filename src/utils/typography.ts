import * as Typography from "typography"
import funstonTheme from "typography-theme-funston"

const typography = new (Typography as any)(funstonTheme)

export default typography
export const rhythm = typography.rhythm
