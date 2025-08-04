
# Next-Security: Production-Ready Authentication for Next.js with Supabase

Next-Security is a robust, production-ready authentication starter kit for Next.js, built with Supabase and Google OAuth2. It provides everything you need to get a secure user authentication system up and running in minutes, including email/password sign-up with confirmation, a password reset flow, and Google login.

Whether you're building a new SaaS, a dashboard, or a web application, Next-Security is ready to be deployed, extended, and integrated into your project.

-----

## Features

  - **Email & Password Authentication**: Secure user sign-up with a built-in email confirmation flow.
  - **Secure Password Resets**: A fully-featured and production-ready password reset flow to handle forgotten passwords.
  - **Google OAuth2**: Easy-to-configure social login with Google.
  - **Next.js App Router**: Built from the ground up using the latest Next.js `app/` directory structure.
  - **SSR Authentication**: Secure, server-side checks for protected routes to ensure data is only visible to logged-in users.
  - **Supabase Auth Integration**: Leverages Supabase's powerful and scalable backend-as-a-service for authentication.
  - **Modern UI**: A fast and accessible user interface built with [shadcn/ui](https://ui.shadcn.com/) components.
  - **Deployment Ready**: Fully environment-driven, making it ready to deploy on platforms like Vercel, Netlify, or any other hosting provider without code changes.

-----

## Getting Started

### 1\. Clone the Repository

Begin by cloning the Next-Security repository and installing the dependencies.

```bash
git clone https://github.com/7TIN/Next-Security.git
cd Next-Security
pnpm install # or npm install / yarn / bun
```

### 2\. Set Up Your Environment Variables

Create a `.env.local` file in the root of your project and add the following variables.

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

  - **`NEXT_PUBLIC_SUPABASE_URL`**: Your Supabase project URL.
  - **`NEXT_PUBLIC_SUPABASE_ANON_KEY`**: Your Supabase public API key.
  - **`NEXT_PUBLIC_SITE_URL`**: The base URL for your application (e.g., `http://localhost:3000`).

**Note**: For a production environment, be sure to set these variables on your hosting provider's dashboard.

-----

## Supabase Setup

### 1\. Create a Project

Head over to the [Supabase dashboard](https://app.supabase.com/) and create a new project.

### 2\. Get Your API Keys

Navigate to **Project Settings \> API** to find your project keys. Copy the `SUPABASE_URL` and `SUPABASE_ANON_KEY` and add them to your `.env.local` file.

### 3\. Configure Redirect URLs

For authentication to work correctly, you need to tell Supabase where to redirect users after certain actions (like password resets or email confirmations).

1.  Go to **Authentication \> URL Configuration**.
2.  Set the **Site URL** to `http://localhost:3000` (and your production domain).
3.  Add the following redirect URLs:
      - `http://localhost:3000/auth/callback`
      - `http://localhost:3000/forgot-password/reset-password`
      - **For production**: Add the same paths but with your deployed domain (e.g., `https://your-domain.com/auth/callback`).

### 4\. Enable Email Confirmation

To ensure users verify their email, enable the email confirmation feature.

1.  Go to **Authentication \> Providers \> Email**.
2.  Toggle **"Email Confirmations"** to **ON**.

-----

## 🌐 Google OAuth2 Setup

### 1\. Configure in Google Cloud Console

1.  Go to the [Google Cloud Console](https://console.cloud.google.com/) and create a new project.
2.  Navigate to **APIs & Services \> Credentials** and click **"Create Credentials" \> "OAuth client ID"**.
3.  Select **"Web application"** as the application type.
4.  Add the following to **Authorized redirect URIs**:
      - `http://localhost:3000/auth/callback`
      - Your production callback URI (e.g., `https://your-domain.com/auth/callback`)
5.  Save your changes and copy the **Client ID** and **Client Secret**.

### 2\. Enable Provider in Supabase

1.  In your Supabase project, go to **Authentication \> Providers \> Google**.
2.  Paste the **Client ID** and **Client Secret** you copied from the Google Cloud Console.
3.  Enable the Google provider.

-----

## Running the Project

Once you've completed all the setup steps, you're ready to run the development server.

```bash
pnpm dev # or npm run dev / yarn dev / bun dev
```

Visit **`http://localhost:3000`** in your browser to see your authentication starter in action\!

-----

## Route Overview

| Route | Purpose |
| :--- | :--- |
| `/` | The public landing page. |
| `/login` | Log in with email/password or Google. |
| `/register` | Sign up with email/password. |
| `/dashboard` | A protected route that only authenticated users can access. |
| `/forgot-password` | Initiates the password reset process. |
| `/forgot-password/reset-password` | The page where users can enter a new password after receiving a magic link. |
| `/auth/callback` | Handles the redirect from OAuth2 providers like Google. |

-----


## 🚀 Deploy to Vercel

The easiest way to deploy Next-Security is with Vercel. Click the button below to deploy the template instantly.

[](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

Remember to configure your environment variables in the Vercel dashboard and update your Supabase settings with your new Vercel domain.

-----

## 📄 License

Next-Security is licensed under the MIT License. See the [LICENSE](https://www.google.com/search?q=./LICENSE) file for more details.