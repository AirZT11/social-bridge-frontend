import { Box } from "@mui/material"
import { styled } from "@mui/system"

/** A Box with display: flex, justifyContent: space-between, and alignItems: center
 * This syntax is a bit weird, but it's the recommended way to use styled-components
 * It enables you to reuse CSS as a component, which is useful for things like
 * buttons, which have a lot of common styles.
 * https://mui.com/system/styled/
 */
const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
})

export default FlexBetween
