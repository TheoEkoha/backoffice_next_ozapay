import * as React from "react";
import "../../../styles/remixicon.css";
import "react-tabs/style/react-tabs.css";
import "swiper/css";
import "swiper/css/bundle";
// Chat Styles
import "../../../styles/chat.css";
// Globals Styles
import "../../../styles/globals.css";
// Rtl Styles
import "../../../styles/rtl.css";
// Dark Mode Styles
import "../../../styles/dark.css";
// Theme Styles
import theme from "@/theme";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import LayoutProvider from "@/providers/LayoutProvider";
import { Toaster } from "sonner";

export const metadata = {
	title: "Admash - Material Design React Nextjs Admin Dashboard Template",
	description: "Material Design React Nextjs Admin Dashboard Templat",
};

export default function RootLayout({ children, params: { lang } }) {
	return (
		<html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
			<body>
				<AppRouterCacheProvider options={{ enableCssLayer: true }}>

					<ThemeProvider theme={theme}>
						{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
						<CssBaseline />

						<LayoutProvider>{children}</LayoutProvider>
						<Toaster position={'bottom-center'} richColors toastOptions={{ duration: 3000 }} />
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
