import { SystemPromptSection } from "../templates/placeholders"
import { TemplateEngine } from "../templates/TemplateEngine"
import type { PromptVariant, SystemPromptContext } from "../types"

export const TECH_STACK_CONTENT = `
## 技术栈支持

### 支持的框架
- **Lightning Web Components (LWC)**
  - 标签: <lightning-component>
  - 基类: LightningElement
  - 导入: 'lwc'
  - 应用场景: Salesforce 平台开发

- **Kingdee Web Components (KWC)**
  - 标签: <kd-component>
  - 基类: KingdeeElement
  - 导入: '@kdcloudjs/kwc'
  - 应用场景: 金蝶平台开发

### 语法要求
  - 使用正确的导入语句
  - 继承正确的基类
  - 严格遵循LWC和KWC语法, 在LWC和KWC组件时, 避免出现React、Angular、Vue等其他框架的语法
  - KWC与LWC的语法差异:
    1. KWC的 标签、基类、导入 与LWC不同
    2. KWC不用创建 .js-meta.xml 文件
    3. 其余语法与LWC语法高度相似
  - 文件命名禁止出现'-'符号。

### 技术栈选择算法
1. 关键词检测: 扫描用户输入中的技术栈关键词
2. 上下文分析: 检查对话历史和当前工作区
3. 默认回退: 如果无法确定，使用 LWC 作为默认值
4. 确认机制: 对于重要操作，确认技术栈选择

### 代码转换规则
当检测到技术栈不匹配时:
- 自动将 LightningElement 转换为 KingdeeElement
- 自动将 'lwc' 导入转换为 '@kdcloudjs/kwc' 导入
- 保持组件逻辑不变，只调整框架特定部分
`

export async function getTechStackSection(variant: PromptVariant, _context: SystemPromptContext): Promise<string> {
	const template = variant.componentOverrides?.[SystemPromptSection.TECH_STACK]?.template || TECH_STACK_CONTENT
	return new TemplateEngine().resolve(template, {})
}