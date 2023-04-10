import { Box, Typography, useMediaQuery, useTheme } from "@mui/material"
import Form from "./Form"

const LoginPage = () => {
  const theme = useTheme()
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)")
  return (
    <Box>
      <Box width="100%" bgcolor={theme.palette.background.alt} component="div">
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          SocialBridge
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        bgcolor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to SocialBridge!
        </Typography>
        <Form />
      </Box>
    </Box>
  )
}

export default LoginPage
