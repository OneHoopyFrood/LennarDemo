# LennarDemo

Demo app for Lennar

## Running

```bash
yarn install
yarn go
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Comments

This is a very quick demo, and thus quite rough. I would usually continue on from this point and clean up until I was more satisfied. A few things I'd do next with such a project:
- Work with designer to determine what clicking the header "trial" button should do. Right now it just highlights and focuses the hero input field.
- Use an actual client lib, assuming I'd have more graphql calls to make
- Add testing, which I skipped for speed here.
- Create a beter project structure. Perhaps a mono-repo to separate the backend and frontend while keeping them in sync naturally.
- Refine the responsive choices. This is very rough right now. The illustration graphic for example doesn't hold the position it's meant to according to the design.

This isn't exaustive, just a few things that bothered me that I figured it'd be worth mentioning.

----

## The Brief

### Overview

Build a **responsive Next.js web app** using **TypeScript**, matching the provided **Figma design**. Review all design specs and implementation notes carefully before starting.

**Design file:**  
[Figma - Lennar Full-Stack Coding Challenge](https://www.figma.com/design/br5MDf1ZXyuVRA2cDug1ov/Lennar-full-stack-coding-challenge?node-id=0-1)

### Requirements

**UI Implementation**

- Recreate the design as a **responsive** Next.js app using **TypeScript**.
- You may use any design framework or component library for base components.

**Functionality**

Implement the **“Start free trial”** button.

On click:

- Capture the **email input**.
- Trigger a **GraphQL mutation** to store the email in a **dummy backend database** (in-memory object or array).
- **Validate** the email and handle any errors gracefully.
- Return a response to the client with the submitted email.

**Backend Setup**

- Set up a **GraphQL server** using a tool of your choice (e.g., `apollo-server-micro`).
- Expose it via a **Next.js API route**.
- Use any **GraphQL client** or **server actions** to make requests.

**SQL Schema Design**

- Briefly describe how you would structure a table to store emails in a real **SQL-based database**. (No implementation required.)

---

## Project structure

**Tools chosen**

- Next.js (required)
- TypeScript (required)
- Apollo Server
- Fetch API (easy, already included)
- Tailwind CSS (ease and familiarity, figma seems to reference it in color values)


