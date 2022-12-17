import React from "react";
import { Button, Htag, P, Tag } from "../components";
import { withLayout } from "../layout/P/Layout";

function Home(): JSX.Element {
    return (
        <>
            <Htag tag='h1'>Some Text</Htag>
            <Button arrow="right" appearance='primary'>Encode</Button>
            <Button arrow="right" appearance='ghost'>Encode</Button>
            <P size="s">Text</P>
            <Tag size="m" color="green">Some Tag</Tag>
        </>
    );
}

export default withLayout(Home);