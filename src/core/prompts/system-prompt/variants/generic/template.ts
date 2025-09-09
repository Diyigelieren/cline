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

{{${SystemPromptSection.USER_INSTRUCTIONS}}}`
