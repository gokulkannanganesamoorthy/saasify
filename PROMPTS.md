# Prompt Engineering Guide: The "Holographic Sci-Fi" Aesthetic

This document contains a set of curated prompts you can use to instruct an AI (like me) to generate code in this specific **"SaaSify"** style. This style is defined by a mix of **Cyberpunk**, **Holographic HUD**, and **Glassmorphism**.

---

## 🏗️ 1. The "Persona" Prompt

_Use this at the start of a conversation to set the AI's mindset._

> **System Instruction:**
> "You are an expert Frontend Architect and UI/UX Designer specializing in **Futuristic User Interfaces (FUI)** and **Holographic Aesthetics**. Your design philosophy is 'Sci-Fi Minimalism'.
>
> **Core Visual Rules:**
>
> 1.  **Dark Mode Only**: The base background is always `bg-zinc-950` or `bg-black`.
> 2.  **Glassmorphism**: Use `bg-zinc-900/50`, `backdrop-blur-xl`, and `border-white/5` for cards and panels.
> 3.  **Neon Accents**: Use focused glowing gradients (`blue-500` to `purple-500`) for emphasis.
> 4.  **Grid & Mesh**: Use subtle background grids (`bg-grid-white/[0.02]`) and radial gradients to create depth.
> 5.  **Micro-Interactions**: Every element must react to hover (glows, slides, scales).
>
> When I ask for a component, build it using **React**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**. It should look like a control panel from a high-tech spaceship."

---

## 🧩 2. Component-Specific Prompts

_Use these to generate specific sections of the website._

### For a "Holographic HUD" Footer

> "Create a Footer that looks like a spaceship's **System Status Interface**.
>
> - **Layout**: 3-column glowing grid.
> - **Features**:
>   1.  A 'Live Status' module showing fake server uptime/latency with a monospaced font.
>   2.  A central 'Reactor Core' brand element that pulses.
>   3.  Social links encased in glass data-blocks.
> - **Vibe**: Technical, precise, and glowing. Use widely spaced tracking for text (`tracking-widest`)."

### For the "Dynamic Floating Island" Navbar

> "Create a Navbar that behaves like a **Floating Dock**.
>
> - **Design**: A glass pill shape (`rounded-full`) floating at the top of the screen.
> - **Mobile Behavior**: Strictly centered Logo. The Menu button should trigger a 'morphing' dropdown that expands from the island itself, not a full-screen overlay.
> - **Animation**: Use spring physics (`type: 'spring'`) so it feels elastic when opening/closing."

### For "Bento Grid" Features

> "Design a Features section using a **Bento Grid** layout.
>
> - **Cards**: Dark glass containers (`bg-zinc-900/40`) with `border-white/10`.
> - **Hover Effect**: When hovering a card, a radial gradient spotlight should follow the cursor (Spotlight Effect).
> - **Content**: Mix rich media (videos/gradients) with minimalist typography."

---

## 🎨 3. Styling & Animation "Cheat Sheet"

_Feed this to the AI if it starts making things look too generic._

**The "SaaSify" Color Palette:**

- **Background**: `bg-zinc-950` (Primary), `bg-black` (Secondary).
- **Surface**: `bg-white/5` (Glass), `bg-zinc-900` (Cards).
- **Borders**: `border-white/5` (Subtle), `border-white/10` (Visible).
- **Glows**: `shadow-[0_0_20px_rgba(59,130,246,0.5)]` (Blue Neon).
- **Text**: `text-zinc-100` (Headings), `text-zinc-500` (Subtext).

**The Animation Signature (Framer Motion):**

```javascript
// Use this spring config for everything
transition={{ type: "spring", stiffness: 260, damping: 20 }}

// Standard Hover effect
whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
```

---

## 🚀 4. "Master Prompt" for a New Page

_Copy-paste this to generate a full page in this style._

> "Create a new 'Integrations' page for my SaaS.
>
> **Style Guide**:
>
> - **Theme**: Cyberpunk/Holographic HUD. Dark mode `bg-zinc-950`.
> - **Hero**: A massive title saying 'System Connectors' with a glowing background beam effect.
> - **Grid**: Display integrations in a responsive grid of glass cards. Each card should have a 'connection status' indicator (green dot).
> - **Interactions**: Hovering a card should show a 'link established' animation.
>
> Use the existing `Navbar` and `Footer` components. Ensure the code is responsive."
