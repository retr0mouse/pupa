import React from "react";
import { useParams } from "react-router-dom";

export function PackRedaction() {
    const { packId } = useParams();
    
    return (
        <h1>{"kek " +  packId }</h1>
    )
}