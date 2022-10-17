import React from "react";
import { Skeleton } from "@mui/material";
import { Container } from "react-bootstrap";

export const Skeletons = () => {
    return (
        <Container maxWith="xl" >
            <Skeleton variant="rounded" with="100%" height={150} sx={{ marginBottom: "1em" }} />
            <Skeleton variant="rounded" with="100%" height={150} sx={{ marginBottom: "1em" }} />
            <Skeleton variant="rounded" with="100%" height={150} sx={{ marginBottom: "1em" }} />
            <Skeleton variant="rounded" with="100%" height={150} sx={{ marginBottom: "1em" }} />
            <Skeleton variant="rounded" with="100%" height={150} sx={{ marginBottom: "1em" }} />
            <Skeleton variant="rounded" with="100%" height={150} sx={{ marginBottom: "1em" }} />
        </Container>
    )
};