import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import globalStyle from './styles/global.css';

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Orçamento Fácil!",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: globalStyle },
    { rel: 'preconnect', href: "https://fonts.googleapis.com" },
    { rel: 'preconnect', href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap" },
  ]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
