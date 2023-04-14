import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material"
import { Box, Typography, useTheme, IconButton } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../store"
import { setFriends } from "../state"
import FlexBetween from "./FlexBetween"
import UserImage from "./UserImage"
import { useNavigate } from "react-router-dom"
import { FC } from "react"

interface FriendProps {
  friendId: string
  name: string
  subtitle: string
  userPicturePath: string
}

const Friend: FC<FriendProps> = ({
  friendId,
  name,
  subtitle,
  userPicturePath,
}) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const id = useAppSelector((state) => state.user?._id)
  const token = useAppSelector((state) => state.token)
  const friends = useAppSelector((state) => state.user?.friends)
  const { palette } = useTheme()
  const primaryLight = palette.primary.light
  const primaryDark = palette.primary.dark
  const main = palette.neutral.main
  const medium = palette.neutral.medium

  // TODO: Fix isFriend logic, it says that array.find is not a function
  // console.log("!@ friends", friends)
  // const isFriend = friends && friends.find((friend) => friend._id === friendId)
  // console.log("!@ isFriend", isFriend)

  const patchFriend = async () => {
    const response = await fetch(
      `http://localhost:3001/users/${id}/${friendId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
    const data = await response.json()
    dispatch(setFriends({ friends: data }))
  }

  return (
    <FlexBetween>
      <FlexBetween gap="1rem">
        <UserImage image={userPicturePath} size="55px" />
        <Box
          onClick={() => {
            navigate(`/profile/${friendId}`)
            navigate(0)
          }}
        >
          <Typography
            color={main}
            variant="h5"
            fontWeight="500"
            sx={{
              "&:hover": {
                color: palette.primary.light,
                cursor: "pointer",
              },
            }}
          >
            {name}
          </Typography>
          <Typography color={medium} fontSize="0.75rem">
            {subtitle}
          </Typography>
        </Box>
      </FlexBetween>
      <IconButton
        onClick={() => patchFriend()}
        sx={{ backgroundColor: primaryLight, p: "0.6rem" }}
      >
        {/* {isFriend ? (
          <PersonRemoveOutlined sx={{ color: primaryDark }} />
        ) : (
          <PersonAddOutlined sx={{ color: primaryDark }} />
        )} */}
      </IconButton>
    </FlexBetween>
  )
}

export default Friend
