# LennarDemo
Demo app as part of an interview process for Lennar

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

----


## Project structure

**Tools chosen**
- Next.js (required)
- TypeScript (required)
- Apollo Client
- appollo-server-micro
- Tailwind CSS (ease and familiarity)



## Running

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser. 
