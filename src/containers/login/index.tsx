"use client"

import { Box, Button, Stack, TextField } from "@mui/material"
import { useRouter } from "next/navigation"

const LoginContainer = () => {
    const router = useRouter()
    return (
        <Box
            sx={{
                minHeight: "100vh",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}>
            <Box
                sx={{
                    padding: 2,
                    borderStyle: "solid",
                    borderWidth: 0.1,
                    borderColor: "gray",
                    width: "50%",
                    borderRadius: "12px"
                }}>
                <Box
                    component="form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        router.push("/dashboard")
                    }}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        width: "100%"
                    }}>
                    <TextField
                        id="outlined-required"
                        label="Username"
                        placeholder="Please type username"
                    />
                    <TextField
                        id="outlined-required"
                        label="Password"
                        type="password"
                        placeholder="Please type password"
                    />
                    <Stack direction={"row"} justifyContent={"flex-end"}>
                        <Button type="submit" variant="contained">
                            Login
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}

export default LoginContainer