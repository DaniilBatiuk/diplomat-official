import { FlatCompat } from '@eslint/eslintrc'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals', // Рекомендуемые настройки ESLint для Next.js
    'next/typescript', // Рекомендуемые настройки для TypeScript
  ),
  {
    files: ['**/*.{js,ts,jsx,tsx}'], // Указываем, какие файлы будут проверяться
    rules: {
      'no-console': 'warn', // Предупреждать о вызовах console.log (не запрещает, но показывает предупреждение)
      'react/react-in-jsx-scope': 'off', // Отключает требование импортировать React в каждом файле JSX (не нужно в Next.js)
      // '@typescript-eslint/no-unsafe-assignment': 'off', // Отключает предупреждение о небезопасном присвоении значений (например, без проверки типов)
      // '@typescript-eslint/no-unused-vars': 'off', // Отключает предупреждение о неиспользуемых переменных
      // '@typescript-eslint/no-unsafe-member-access': 'off', // Отключает проверку доступа к свойствам на объектах с неизвестным типом
      // '@typescript-eslint/no-unsafe-argument': 'off', // Отключает проверку небезопасных аргументов, переданных в функции
      // '@typescript-eslint/no-floating-promises': 'off', // Отключает предупреждение о незавершённых (необработанных) промисах
      // '@typescript-eslint/await-thenable': 'off', // Отключает предупреждение о вызове await на объектах, которые не являются thenable (например, не промисами)
      // '@typescript-eslint/no-misused-promises': 'off', // Отключает предупреждение о неправильном использовании промисов (например, где они не ожидаются)
      // '@typescript-eslint/no-unsafe-call': 'off', // Отключает проверку вызовов функций с небезопасным типом
      // '@typescript-eslint/no-unsafe-enum-comparison': 'off', // Отключает предупреждение при сравнении перечислений (enum) с другими значениями
      // '@typescript-eslint/unbound-method': 'off', // Отключает проверку использования несвязанного метода объекта, который может потерять контекст
      // '@typescript-eslint/no-var-requires': 'off', // Отключает запрет на использование `require()` вместо `import` в TypeScript
      // '@typescript-eslint/no-throw-literal': 'off', // Отключает запрет на выброс литералов в исключениях (например, `throw "error"`)
      'no-restricted-syntax': 'off', // Отключает запрет на использование определённых синтаксических конструкций
      '@typescript-eslint/no-explicit-any': 'warn', // Отключает ошибку на any
      '@typescript-eslint/no-empty-object-type': 'off', // Отключает предупреждение о пустом типе объекта
      // 'promise/always-return': 'off', // Отключает правило, требующее всегда возвращать значение в цепочках промисов
      'jsx-a11y/label-has-associated-control': 'warn', // Показывает предупреждение, если у элемента <label> нет связанного элемента управления
      'react/no-unescaped-entities': 'off', // Показывает предупреждение, если у компонента нет связанного элемента управления
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },
]

export default eslintConfig
