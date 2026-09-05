import type { SimpleIcon } from "simple-icons";
import {
  siAlibabacloud,
  siClaude,
  siClaudecode,
  siCursor,
  siDeepseek,
  siDocker,
  siFastapi,
  siGit,
  siGithub,
  siGithubactions,
  siLangchain,
  siLinux,
  siMysql,
  siNumpy,
  siOllama,
  siPandas,
  siPostman,
  siPydantic,
  siPytest,
  siPython,
  siPytorch,
  siQwen,
  siScipy,
  siSqlalchemy,
  siSqlite,
  siStreamlit,
} from "simple-icons";

const logos: Record<string, SimpleIcon> = {
  python: siPython,
  fastapi: siFastapi,
  sqlalchemy: siSqlalchemy,
  sqlite: siSqlite,
  streamlit: siStreamlit,
  pydantic: siPydantic,
  pandas: siPandas,
  numpy: siNumpy,
  sql: siMysql,
  mysql: siMysql,
  git: siGit,
  github: siGithub,
  docker: siDocker,
  linux: siLinux,
  "github actions": siGithubactions,
  langchain: siLangchain,
  ollama: siOllama,
  cursor: siCursor,
  "claude code": siClaudecode,
  claude: siClaude,
  pytorch: siPytorch,
  postman: siPostman,
  pytest: siPytest,
  dashscope: siAlibabacloud,
  阿里云: siAlibabacloud,
  通义: siQwen,
  qwen: siQwen,
  deepseek: siDeepseek,
  "statistical modeling": siScipy,
};

export function getSkillLogo(label: string): SimpleIcon | null {
  const key = label.trim().toLowerCase();
  const exact = logos[key];
  if (exact) return exact;

  let match: SimpleIcon | null = null;
  let matchLength = 0;
  for (const [name, icon] of Object.entries(logos)) {
    if (name.length < 4 || !key.includes(name) || name.length <= matchLength) {
      continue;
    }
    match = icon;
    matchLength = name.length;
  }
  return match;
}

export function logoFill(hex: string): string {
  const value = hex.replace("#", "");
  const r = Number.parseInt(value.slice(0, 2), 16);
  const g = Number.parseInt(value.slice(2, 4), 16);
  const b = Number.parseInt(value.slice(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  if (luminance >= 0.28) {
    return `#${value}`;
  }

  if (luminance < 0.08) {
    return "#fafafa";
  }

  const lift = (0.55 - luminance) / (1 - luminance);
  const channel = (n: number) =>
    Math.round(n + (255 - n) * lift)
      .toString(16)
      .padStart(2, "0");
  return `#${channel(r)}${channel(g)}${channel(b)}`;
}
