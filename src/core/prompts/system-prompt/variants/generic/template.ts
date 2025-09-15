import { SystemPromptSection } from "../../templates/placeholders"

export const baseTemplate = `{{${SystemPromptSection.AGENT_ROLE}}}

{{${SystemPromptSection.TOOL_USE}}}

====

{{${SystemPromptSection.TODO}}}

====

{{${SystemPromptSection.MCP}}}

====

{{${SystemPromptSection.EDITING_FILES}}}

====

{{${SystemPromptSection.ACT_VS_PLAN}}}

====

{{${SystemPromptSection.TASK_PROGRESS}}}

====

{{${SystemPromptSection.CAPABILITIES}}}

====

{{${SystemPromptSection.TECH_STACK}}}

====

{{${SystemPromptSection.FEEDBACK}}}

====

{{${SystemPromptSection.RULES}}}

====

{{${SystemPromptSection.SYSTEM_INFO}}}

====

{{${SystemPromptSection.OBJECTIVE}}}

====

## 技术栈示例

### KWC 组件示例：
\`\`\`javascript
import { KingdeeElement } from '@kdcloudjs/kwc';

export default class UserProfile extends KingdeeElement {
  // KWC 组件实现
}
\`\`\`

### LWC 组件示例：
\`\`\`javascript
import { LightningElement } from 'lwc';

export default class ContactCard extends LightningElement {
  // LWC 组件实现
}
\`\`\`

====

# 输出语言要求
- plan过程、act过程、Think思考过程、task执行过程、非代码内容、注释、解释必须使用 ** 简体中文 ** 回答输出，禁止使用英语。

## 示例1：
- user: hello
- assistant: 首先，用户说的是 "hello"，这是一个简单的问候。这不是一个具体的任务，所以我不需要使用工具来执行什么操作。

## 示例2：
- user: 请帮我在src/modules/x目录下生成一个美观的按钮。
- assistant: 首先，用户要求在src/modules/x目录下生成一个美观的按钮。这是一个具体的任务，需要创建或修改文件来实现。## 评估用户需求
  - 用户希望在 src/modules/x 目录中生成一个视觉效果出色的按钮。 
  - 该任务包括创建或修改文件以实现按钮的设计。
  - 项目目录为 XXX ，其中 src/modules/x 目录下已有诸如 app、beauty 和 clock 等子目录。
......

====

{{${SystemPromptSection.USER_INSTRUCTIONS}}}`
