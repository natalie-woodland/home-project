import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import styled from "@emotion/styled";
import { Stack, Text } from "@chakra-ui/core";

type Props = {
  children?: ReactNode;
  title: string;
  description: string;
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  max-width: 1400px;
  position: relative;
  box-sizing: border-box;
  padding: 24pt;
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  height: 2rem;
`;

const Content = styled.div`
  padding-bottom: 2rem;
`;

const VERCEL_SPONSORED_LINK =
  "https://vercel.com?utm_source=qbacc-home-project&utm_campaign=oss";

const Layout = ({ children, title, description }: Props) => (
  <Container>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <img
            src="/logo.svg"
            style={{ height: "42px", cursor: "pointer" }}
            alt="QBACC's Home Project"
          />
        </Link>
      </nav>
    </header>
    <Content>{children}</Content>
    <Footer>
      <a href={VERCEL_SPONSORED_LINK} target="_blank" rel="noreferrer">
        <Stack
          justifyContent="flex-start"
          height="16pt"
          isInline
          alignItems="center"
        >
          <Text fontSize="xs">Powered By</Text>
          <svg
            height="9pt"
            viewBox="0 0 283 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
              fill="#000"
            />
          </svg>
        </Stack>
      </a>
    </Footer>
  </Container>
);

export default Layout;
