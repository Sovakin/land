# Промпт для верстки статей в HTML

Ты — опытный Frontend-разработчик. Твоя задача — сверстать статью из Markdown в современный Landing Page, используя только HTML и CSS (без JavaScript и фреймворков).

**ВАЖНО:** Статья может содержать мультимедийные элементы, обозначенные специальными маркерами:
- `[🖼️ INTERACTIVE WIDGET: название]` — интерактивные виджеты (формы, калькуляторы, слайдеры)
- `[🖼️ INFOGRAPHIC: название]` — инфографика и диаграммы
- `[🖼️ IMAGE: название]` — скриншоты и иллюстрации
- `[🖼️ ILLUSTRATION: название]` — концептуальные иллюстрации
- `[🖼️ DIAGRAM: название]` — схемы и таблицы решений
- `[🖼️ FEATURE ICONS: название]` — сетки иконок функций

Каждый элемент содержит:
- **Description:** визуальное описание элемента
- **Purpose:** цель и функция элемента
- **Semantic markup rules:** точные HTML-теги и ARIA-атрибуты для доступности

## Требования к структуре:

### 1. HTML-структура
- Используй существующий шаблон из `index.html` (header, nav, breadcrumbs, main, footer)
- Каждая секция статьи должна быть обернута в `<section>` с классом `article-section`
- Первая секция (hero) должна иметь класс `block-1`
- Добавь `id` для каждой секции для навигации (например: `id="comparison"`, `id="rankings"`)

### 2. Hero-секция (block-1)
Должна содержать:
- `<div class="ai-transparency-block">`
- `<div class="update-badge">Updated: [Месяц Год]</div>`
- `<h1 class="block-1__title">` — основной заголовок статьи
- `<div class="block-1__subtitle">` — краткое описание + блок "What's New"
- Trust-элементы (звезды, количество пользователей)
- Input-контейнер с кнопкой CTA
- Вступительный текст

### 3. Стилизация заголовков
- **ВСЕ `<h2>` должны иметь `style="text-align: center;"`**
- Параграфы `<p>` после `<h2>` **НЕ должны** иметь `text-align: center;`
- Используй семантические заголовки: `<h1>` (один), `<h2>` (секции), `<h3>` (подсекции), `<h4>` (детали)

### 4. Цитаты
```html
<section class="article-section" style="padding-top: 60px;">
    <div class="container">
        <blockquote class="quote-block">
            "Текст цитаты"
            <span class="quote-author">— Имя Автора, Должность</span>
        </blockquote>
    </div>
</section>
```

### 5. Таблицы сравнения
```html
<section class="article-section" style="margin-top: 80px; max-width: 1200px;">
    <div class="container">
        <h2 style="text-align: center;">Заголовок таблицы</h2>
        
        <div class="comparison-table-wrapper">
            <table class="comparison-table">
                <caption>Название таблицы (Месяц Год)</caption>
                <thead>
                    <tr>
                        <th scope="col">Колонка 1</th>
                        <th scope="col">Колонка 2</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Название</strong></td>
                        <td>Значение</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</section>
```

**ВАЖНО:** Для всех секций с таблицами обязательно добавляй `style="max-width: 1200px;"` к тегу `<section>`.

### 6. Table of Contents (TOC)
Добавь навигацию после первой таблицы сравнения:
```html
<nav class="toc" aria-label="Table of Contents" style="margin: 40px 0;">
    <h3 style="font-size: 1.1em; margin-bottom: 16px;">Contents:</h3>
    <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 8px;"><a href="#section-id">Название секции</a></li>
    </ul>
</nav>
```

### 7. Рейтинги/Обзоры инструментов
```html
<div class="reviews-list-wrapper" style="margin-top: 60px;">
    <div class="review-item">
        <div class="review-header">
            <div class="review-rank">1</div>
            <h3 class="review-title">Название—Описание</h3>
        </div>
        <div class="review-body">
            <p class="review-desc">Описание</p>
            <p class="review-pricing"><strong>Pricing:</strong> детали</p>
            <div class="review-pros-cons">
                <div class="pros">
                    <span class="label">Pros</span>
                    <ul>
                        <li>Преимущество 1</li>
                    </ul>
                </div>
                <div class="cons">
                    <span class="label">Cons</span>
                    <ul>
                        <li>Недостаток 1</li>
                    </ul>
                </div>
            </div>
            <p style="text-align: center; margin-top: 24px;">
                <a href="URL" target="_blank" rel="nofollow" class="btn btn-header" 
                   style="display: inline-block; text-decoration: none;">Try [Tool]</a>
            </p>
        </div>
    </div>
</div>
```

### 8. Пошаговые инструкции
```html
<div class="steps-container">
    <div class="step-item">
        <div class="step-number">1</div>
        <div class="step-content">
            <h3>Заголовок шага</h3>
            <p>Описание</p>
        </div>
    </div>
</div>
```

### 9. Карточки с подсказками
```html
<div class="prompt-card">
    <h3>Заголовок</h3>
    <p>Текст</p>
</div>
```

Для сетки карточек:
```html
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-top: 40px;">
    <div class="prompt-card">...</div>
</div>
```

### 10. Обязательные секции в конце статьи

**Перед FAQ добавь:**

1. **Other Notable Platforms** — список других инструментов
2. **Cost & Time Estimates** — таблица стоимости и времени (с `max-width: 1200px;`)
3. **Legal & Safety / Provenance** — юридическая информация с подзаголовками `<h3>`
4. **Updates, Author, and Sources** — информация об авторе и источники

### 11. FAQ секция
```html
<section id="faq" class="block-10 flex-center-all">
    <div class="container container-block-10 flex-center-all">
        <div class="block-10__content">
            <h2 class="block-10__title">FAQ on [Topic]</h2>
            <div class="block-10__wrapper">
                <div class="block-10__items-container">
                    <div class="block-10__column">
                        <div class="block-10__item">
                            <div class="block-10__border"></div>
                            <button class="block-10__question">
                                <h3>Вопрос?</h3>
                                <svg class="block-10__icon" viewBox="0 0 24 24" fill="none">
                                    <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            <div class="block-10__answer">
                                <p>Ответ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
```

### 12. Важные правила

✅ **ДЕЛАЙ:**
- Добавляй `style="margin-top: 80px;"` между секциями для отступов
- Используй `<strong>` для выделения важных слов
- Добавляй `target="_blank" rel="nofollow"` для внешних ссылок
- Оборачивай контент в `<div class="container">` для ограничения ширины
- Используй семантические HTML5-теги
- Добавляй примечания курсивом: `<em>Note: ...</em>`
- **ОБЯЗАТЕЛЬНО добавляй изображения в статью:** инфографику после пошаговых инструкций, скриншоты интерфейса, иллюстрации функций в соответствующих секциях

❌ **НЕ ДЕЛАЙ:**
- Не используй JavaScript
- Не используй CSS-фреймворки
- Не добавляй `text-align: center;` к параграфам после `<h2>`
- Не забывай закрывать теги
- Не модифицируй header, footer, breadcrumbs (кроме текста breadcrumbs)
- Не создавай статью без мультимедийных элементов (изображений)

### 13. Мультимедийные элементы

Статья может содержать специальные маркеры для визуальных элементов. Каждый маркер нужно заменить на соответствующий HTML-код.

#### Интерактивные виджеты (INTERACTIVE WIDGET)

**Пример: File Upload Form**
```html
<section role="form" aria-labelledby="upload-heading" class="article-section" style="margin-top: 60px;">
    <div class="container">
        <h2 id="upload-heading" style="text-align: center;">Upload Your Video</h2>
        <div class="prompt-card" style="max-width: 600px; margin: 40px auto; text-align: center;">
            <button aria-label="Select file for compression" class="btn btn-header" 
                    style="display: inline-block; margin-bottom: 20px;">Select file</button>
            <div role="button" tabindex="0" aria-dropeffect="copy" 
                 style="border: 2px dashed rgba(255,255,255,0.3); padding: 40px; border-radius: 8px; margin-bottom: 20px;">
                <p>Upload file / Drop files here</p>
            </div>
            <progress max="100" value="0" style="width: 100%; margin-bottom: 16px;">0%</progress>
            <div style="text-align: left;">
                <input type="checkbox" id="auto-delete">
                <label for="auto-delete">Delete file in 1 hour</label>
            </div>
        </div>
    </div>
</section>
```

**Пример: Target Size Slider**
```html
<div class="prompt-card" style="margin-top: 40px;">
    <form>
        <label for="target-size">Target file size (MB):</label>
        <input type="range" id="target-size" min="2" max="100" 
               aria-valuemin="2" aria-valuemax="100" aria-valuenow="10" 
               style="width: 100%; margin: 16px 0;">
        <output for="target-size" style="font-size: 1.2em; font-weight: bold;">10 MB</output>
        <div role="tooltip" style="margin-top: 12px; font-size: 0.9em; color: #aaa;">
            <p>💡 Discord: 8-10 MB | Email: 20-25 MB</p>
        </div>
    </form>
</div>
```

#### Инфографика (INFOGRAPHIC)

**Пример: 3 Steps Process**
```html
<div style="margin: 60px 0;">
    <ol style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 32px; list-style: none; padding: 0;">
        <li style="text-align: center;">
            <figure>
                <img src="/assets/images/step-1-upload.svg" alt="Step 1: Upload file icon" 
                     style="width: 80px; height: 80px; margin-bottom: 16px;">
                <figcaption><strong>Upload file</strong><br>Select file</figcaption>
            </figure>
        </li>
        <li style="text-align: center;">
            <figure>
                <img src="/assets/images/step-2-settings.svg" alt="Step 2: Settings icon" 
                     style="width: 80px; height: 80px; margin-bottom: 16px;">
                <figcaption><strong>Choose settings</strong><br>& compress</figcaption>
            </figure>
        </li>
        <li style="text-align: center;">
            <figure>
                <img src="/assets/images/step-3-download.svg" alt="Step 3: Download icon" 
                     style="width: 80px; height: 80px; margin-bottom: 16px;">
                <figcaption><strong>Download</strong><br>compressed video</figcaption>
            </figure>
        </li>
    </ol>
</div>
```

#### Скриншоты и иллюстрации (IMAGE/ILLUSTRATION)

```html
<figure style="margin: 40px 0;">
    <img src="/assets/images/compressor-ui.png" 
         alt="Interface of online video compressor showing target-size slider and Compress button" 
         style="max-width: 100%; height: auto; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">
    <figcaption style="text-align: center; margin-top: 12px; font-size: 0.9em; color: #aaa;">
        Real-time target-size control—no trial and error.
    </figcaption>
</figure>
```

#### Сетки иконок (FEATURE ICONS)

```html
<ul role="list" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px; list-style: none; padding: 0; margin: 40px 0;">
    <li>
        <article style="text-align: center;">
            <svg width="48" height="48" style="margin-bottom: 12px;">
                <title>Trim function icon</title>
                <!-- SVG content -->
            </svg>
            <h4 style="margin: 8px 0;">Trim</h4>
            <p style="font-size: 0.9em; color: #aaa;">Remove segments</p>
        </article>
    </li>
    <!-- Repeat for other features -->
</ul>
```

#### Сетка внутренних ссылок с иконками (INTERNAL LINKS GRID)

**Пример: Related Tools с SVG иконками**
```html
<nav aria-label="Related tools" style="margin-top: 40px;">
    <ul style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 24px; list-style: none; padding: 0;">
        <li>
            <a href="/video-converter/" style="text-decoration: none; color: inherit;">
                <div class="prompt-card" style="text-align: center; transition: transform 0.3s ease;">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style="margin: 0 auto 16px;">
                        <title>Video Converter icon</title>
                        <rect x="8" y="12" width="32" height="24" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
                        <path d="M18 20L28 24L18 28V20Z" fill="currentColor"/>
                    </svg>
                    <h4 style="margin: 0 0 8px 0;">Video Converter</h4>
                    <p style="margin: 0; font-size: 14px; color: #aaa;">Switch formats</p>
                </div>
            </a>
        </li>
        <!-- Repeat for: Trim, Resize, Subtitles, Audio, HEVC, GIF -->
    </ul>
</nav>
```

#### Before/After Gallery с видео-сравнением

**Пример: Реальные примеры сжатия с видео (комбинированное before/after в одном видео)**
```html
<article style="margin-bottom: 60px;">
    <h3>Example 1: 1080p Talking-Head Interview</h3>
    
    <div style="background: rgba(0,0,0,0.3); padding: 16px; border-radius: 8px; margin: 16px 0;">
        <div style="display: grid; grid-template-columns: 1fr auto 1fr; gap: 16px; align-items: center;">
            <div>
                <p style="margin: 0 0 8px 0; font-size: 12px; color: #aaa; text-transform: uppercase;">Before</p>
                <p style="margin: 0; font-size: 14px;"><strong>180 MB</strong></p>
                <p style="margin: 4px 0 0 0; font-size: 12px; color: #ccc;">1080p 30fps H.264<br>24 Mbps VBR</p>
            </div>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style="opacity: 0.5;">
                <path d="M8 16H24M24 16L18 10M24 16L18 22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div>
                <p style="margin: 0 0 8px 0; font-size: 12px; color: #aaa; text-transform: uppercase;">After</p>
                <p style="margin: 0; font-size: 14px; color: #4ade80;"><strong>9.8 MB</strong></p>
                <p style="margin: 4px 0 0 0; font-size: 12px; color: #ccc;">1080p 30fps H.264<br>1.2 Mbps VBR</p>
            </div>
        </div>
    </div>

    <div style="margin: 16px 0; background: #000; border-radius: 8px; overflow: hidden;">
        <video controls loop muted playsinline style="width: 100%; height: auto; display: block;">
            <source src="/assets/videos/talking-head-comparison.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
    <p style="margin: 8px 0 0 0; font-size: 12px; color: #aaa; text-align: center;">
        <em>60 sec • Processing time: 52 sec • Quality: 4.2/5</em>
    </p>
    
    <p style="margin: 16px 0 0 0; font-size: 14px; color: #ddd;"><strong>Result:</strong> 94.6% size reduction with minimal quality loss</p>
</article>
```

*Purpose:* Визуальное доказательство возможностей инструмента с реальными видео, где before/after уже объединены в одном видео (например, side-by-side или split-screen).

*Semantic markup rules:* `<article>` для каждого примера без класса `prompt-card`, одно `<video>` с атрибутами `controls loop muted playsinline`, метрики before/after в отдельном блоке сверху, метрики обработки под видео.

#### Диаграммы и схемы (DIAGRAM)

**Decision Tree:**
```html
<figure style="margin: 60px 0;">
    <img src="/assets/images/decision-tree.svg" 
         alt="Decision tree: choosing online vs. desktop compression method" 
         style="max-width: 100%; height: auto;">
    <figcaption style="margin-top: 16px;">
        <strong>Quick decision guide:</strong> File size > 1 GB or need offline? → Desktop. 
        Sensitive footage? → Desktop. Otherwise → Online.
    </figcaption>
</figure>
```

#### Schema.org разметка

Добавляй JSON-LD схемы в конце соответствующих секций:

**SoftwareApplication:**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Tool Name",
  "operatingSystem": "Web",
  "applicationCategory": "MultimediaApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}
</script>
```

**HowTo:**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to [Action]",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Step name",
      "text": "Step description"
    }
  ]
}
</script>
```

### 14. Адаптивность
- Таблицы автоматически адаптивны через `.comparison-table-wrapper`
- Используй `max-width: 1200px;` для секций с широким контентом
- Grid-сетки автоматически адаптируются через `repeat(auto-fit, minmax(280px, 1fr))`
- Изображения всегда с `max-width: 100%; height: auto;`

## Процесс работы:
1. Прочитай существующие `index.html` для понимания структуры
2. Найди все мультимедийные маркеры `[🖼️ ...]` в статье и замени их на соответствующий HTML согласно **Semantic markup rules**
3. Замени контент в `<main>` и FAQ-секции
4. Обнови breadcrumbs, title, meta description
5. Добавь JSON-LD схемы (SoftwareApplication, HowTo, FAQPage) где указано
6. Проверь, что все `<h2>` центрированы
7. Проверь, что все секции из Markdown добавлены
8. Убедись, что структура валидна (все теги закрыты)
9. Проверь доступность: все изображения с alt, формы с label, интерактивные элементы с ARIA-атрибутами

Результат должен быть полностью готов к использованию без дополнительных правок.