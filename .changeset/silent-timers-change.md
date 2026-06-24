---
"rhf-mantine": patch
---

Remove `@hookform/devtools` from the runtime dependency graph to avoid SSR bundling failures in Next.js/Turbopack.
