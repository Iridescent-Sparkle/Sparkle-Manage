module.exports = {
  parserPreset: 'conventional-changelog-conventionalcommits',
  rules: {
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', ['init', 'feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'ci', 'chore', 'revert']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
  },
  prompt: {
    questions: {
      type: {
        description: '请选择提交类型',
        enum: {
          init: {
            description: '项目初始化',
            title: 'init',
            emoji: '🎉',
          },
          feat: {
            description: '添加新特性',
            title: 'feat',
            emoji: '✨',
          },
          fix: {
            description: '修复bug',
            title: 'fix',
            emoji: '🐞',
          },
          docs: {
            description: '仅仅修改文档',
            title: 'docs',
            emoji: '📃',
          },
          style: {
            description: '仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑',
            title: 'style',
            emoji: '🌈',
          },
          refactor: {
            description: '代码重构，没有加新功能或者修复bug',
            title: 'refactor',
            emoji: '🦄',
          },
          perf: {
            description: '优化相关，比如提升性能、体验',
            title: 'perf',
            emoji: '🎈',
          },
          test: {
            description: '增加测试用例',
            title: 'test',
            emoji: '🧪',
          },
          build: {
            description: '依赖相关的内容',
            title: 'build',
            emoji: '🔧',
          },
          ci: {
            description: 'ci配置相关 例如对 k8s，docker的配置文件的修改',
            title: 'ci',
            emoji: '🐎',
          },
          chore: {
            description: '改变构建流程、或者增加依赖库、工具等',
            title: 'chore',
            emoji: '🐳',
          },
          revert: {
            description: '回滚到上一个版本',
            title: 'revert',
            emoji: '↩',
          },
        },
      },
      scope: {
        title: '修改范围',
        description: '本次修改包含哪些模块',
      },
      subject: {
        title: '概述',
        description: '提交概述，不超过40字符',
      },
      body: {
        title: '详情',
        description: '提交详情，可换行显示',
      },
      footer: {
        title: '备注',
        description: '通常是修复 bug 的链接',
      },
    },
  },
}
