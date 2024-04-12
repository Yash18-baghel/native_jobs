import { pathT } from "@/utils/types";
import { Redirect } from "expo-router";
import React from "react";

export default function Index() {
    return <Redirect href={"/home" as pathT} />;
}