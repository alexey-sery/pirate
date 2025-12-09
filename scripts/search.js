$(document).ready(function () {
  let courses = []
  let categoryCourses = {}
  let currentCategory = null
  let code = [
    'ZGIvYXV0aG9yLzNELmpzb24=', // 3D
    'ZGIvYXV0aG9yL1NFTyAmIFNNTS5qc29u', // SEO & SMM
    'ZGIvYXV0aG9yL2J1c2luZXNzLmpzb24=', // Бизнес
    'ZGIvYXV0aG9yL0NoaWxkcmVuICYgUGFyZW50cy5qc29u', // Дети и родители
    'ZGIvYXV0aG9yL2Rlc2lnbi5qc29u', // Дизайн и живопись
    'ZGIvYXV0aG9yL290aGVyLmpzb24=', // Другое
    'ZGIvYXV0aG9yL0hlYWx0aCAmIFNwb3J0cy5qc29u', // Здоровье и спорт
    'ZGIvYXV0aG9yL3N0eWxlLmpzb24=', // Имидж и стиль
    'ZGIvYXV0aG9yL2ludmVzdG1lbnQuanNvbg==', // Инвестиции и форекс
    'ZGIvYXV0aG9yL2xhbmd1YWdlcy5qc29u', // Иностранные языки
    'ZGIvYXV0aG9yL2Nvb2tpbmcuanNvbg==', // Кулинария
    'ZGIvYXV0aG9yL21hcmtldGluZy5qc29u', // Маркетинг и реклама
    'ZGIvYXV0aG9yL211c2ljLmpzb24=', // Музыка
    'ZGIvYXV0aG9yL25ldXJvbmV0Lmpzb24=', // Нейросети
    'ZGIvYXV0aG9yL3BpY2t1cC5qc29u', // Пикап
    'ZGIvYXV0aG9yL3Byb2dyYW1taW5nLmpzb24=', // Программирование
    'ZGIvYXV0aG9yL3BzeWNob2xvZ3kuanNvbg==', // Психология и саморазвитие
    'ZGIvYXV0aG9yL2NvbnN0cnVjdGlvbi5qc29u', // Ремонт и строительство
    'ZGIvYXV0aG9yL0RJWS5qc29u', // Сделай сам
    'ZGIvYXV0aG9yL2Vhcm4uanNvbg==', // Схемы заработка
    'ZGIvYXV0aG9yL1Bob3RvcyAmIFZpZGVvcy5qc29u', // Фото и видео
    'ZGIvYXV0aG9yL2ZyZWVsYW5jZS5qc29u', // Фриланс
    'ZGIvYXV0aG9yL2hhY2tpbmcuanNvbg==', // Хакинг и кибербезопасность
    'ZGIvYXV0aG9yL2Vzb3RlcmljaXNtLmpzb24=', // Эзотерика
    'ZGIvYXV0aG9yL2pvdXJuZXlzLmpzb24=', // Путешествия
    'ZGIvYXV0aG9yL3Bva2VyLmpzb24=', // Покер, ставки, казино
    'ZGIvYXV0aG9yL2FyYml0cmF0aW9uLmpzb24=', // Арбитраж Трафика
    'ZGIvYXV0aG9yL25ldy5qc29u', // NEW
    'ZGIvYXV0aG9yL2FsbC5qc29u', // all
  ]

  const categoryMap = {
    '3D-моделирование': 'ZGIvYXV0aG9yLzNELmpzb24=',
    'SEO & SMM': 'ZGIvYXV0aG9yL1NFTyAmIFNNTS5qc29u',
    Бизнес: 'ZGIvYXV0aG9yL2J1c2luZXNzLmpzb24=',
    'Дети и родители': 'ZGIvYXV0aG9yL0NoaWxkcmVuICYgUGFyZW50cy5qc29u',
    'Дизайн и живопись': 'ZGIvYXV0aG9yL2Rlc2lnbi5qc29u',
    Другое: 'ZGIvYXV0aG9yL290aGVyLmpzb24=',
    'Здоровье и спорт': 'ZGIvYXV0aG9yL0hlYWx0aCAmIFNwb3J0cy5qc29u',
    'Имидж и стиль': 'ZGIvYXV0aG9yL3N0eWxlLmpzb24=',
    'Инвестиции и форекс': 'ZGIvYXV0aG9yL2ludmVzdG1lbnQuanNvbg==',
    'Иностранные языки': 'ZGIvYXV0aG9yL2xhbmd1YWdlcy5qc29u',
    Кулинария: 'ZGIvYXV0aG9yL2Nvb2tpbmcuanNvbg==',
    'Маркетинг и реклама': 'ZGIvYXV0aG9yL21hcmtldGluZy5qc29u',
    Музыка: 'ZGIvYXV0aG9yL211c2ljLmpzb24=',
    Нейросети: 'ZGIvYXV0aG9yL25ldXJvbmV0Lmpzb24=',
    'Пикап, искусство соблазнения': 'ZGIvYXV0aG9yL3BpY2t1cC5qc29u',
    'Программирование и сайтостроение': 'ZGIvYXV0aG9yL3Byb2dyYW1taW5nLmpzb24=',
    'Психология и саморазвитие': 'ZGIvYXV0aG9yL3BzeWNob2xvZ3kuanNvbg==',
    'Ремонт и строительство': 'ZGIvYXV0aG9yL2NvbnN0cnVjdGlvbi5qc29u',
    'Сделай сам': 'ZGIvYXV0aG9yL0RJWS5qc29u',
    'Схемы заработка': 'ZGIvYXV0aG9yL2Vhcm4uanNvbg==',
    'Фото и видео': 'ZGIvYXV0aG9yL1Bob3RvcyAmIFZpZGVvcy5qc29u',
    Фриланс: 'ZGIvYXV0aG9yL2ZyZWVsYW5jZS5qc29u',
    'Хакинг и кибербезопасность': 'ZGIvYXV0aG9yL2hhY2tpbmcuanNvbg==',
    Эзотерика: 'ZGIvYXV0aG9yL2Vzb3RlcmljaXNtLmpzb24=',
    Путешествия: 'ZGIvYXV0aG9yL2pvdXJuZXlzLmpzb24=',
    'Покер, ставки, казино': 'ZGIvYXV0aG9yL3Bva2VyLmpzb24=',
    'Арбитраж Трафика': 'ZGIvYXV0aG9yL2FyYml0cmF0aW9uLmpzb24=',
  }

  let files = code.map((file) => atob(file))
  let requests = files.map((file) => $.getJSON(file))

  $.when
    .apply($, requests)
    .done((...responses) => {
      responses.forEach((response) => {
        courses = courses.concat(response[0])
      })

      $(document).ready(function () {
        const totalCourses = courses.length

        function animateCount(targetNumber) {
          let currentNumber = 0
          const increment = Math.ceil(targetNumber / 50)

          const interval = setInterval(() => {
            currentNumber += increment
            if (currentNumber >= targetNumber) {
              currentNumber = targetNumber
              clearInterval(interval)
            }
            $('#titleCountIndex').text(currentNumber)
          }, 50)
        }

        animateCount(totalCourses)
      })

      $('#titleCount').text(`Всего курсов: ${courses.length}`)

      let timer

      $('#search').on('input', function () {
        $('#clearSearch').toggle($(this).val().length > 0)

        clearTimeout(timer)
        let query = $(this).val().toLowerCase().trim()

        // Ввод в поиск
        if (query.length >= 1) {
          $('.wrapper article:visible').fadeOut(300)
        } else {
          if (!currentCategory) {
            $('.wrapper article:hidden').fadeIn(300)
          } else {
            $('.wrapper article').hide()
          }
        }

        timer = setTimeout(() => {
          search(query)
        }, 300)
      })

      $('#clearSearch').on('click', function () {
        $('#search').val('').trigger('input').focus()
      })

      // Нормализация символов поиска
      function normalize(str) {
        return str
          .replace(/[\u0421\u0441]/g, 'c')
          .replace(/[\u041E\u043E]/g, 'o')
          .replace(/[\u0041\u0061\u0410\u0430]/g, 'a')
          .replace(/[\u0045\u0065\u0415\u0435]/g, 'e')
          .replace(/[\u0048\u0068\u041D\u043D]/g, 'h')
          .replace(/[\u004B\u006B\u041A\u043A]/g, 'k')
          .replace(/[\u004D\u006D\u041C\u043C]/g, 'm')
          .replace(/[\u0050\u0070\u0420\u0440]/g, 'p')
          .replace(/[\u0054\u0074\u0422\u0442]/g, 't')
          .replace(/[\u0042\u0062\u0412\u0432]/g, 'b')
          .replace(/[\u0058\u0078\u0425\u0445]/g, 'x')
          .replace(/[\u0059\u0079\u0423\u0443]/g, 'y')
          .toLowerCase()
      }

      function escapeRegExp(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      }

      function search(rawQuery) {
        let strings = [' (20', '(20']
        let isStrings = strings.some((substring) => rawQuery === substring)

        if (isStrings) return

        if (rawQuery.length >= 3) {
          const rawLower = rawQuery.toLowerCase()
          const query = normalize(rawQuery)

          const exactTerms = []
          let stripped = rawLower
          const slashRe = /\\([^\\]+)\\/g
          let match
          while ((match = slashRe.exec(rawLower)) !== null) {
            exactTerms.push(match[1].toLowerCase())
            stripped = stripped.replace(match[0], ' ')
          }

          const words = normalize(stripped)
            .split(/\s+/)
            .map((w) => w.trim())
            .filter((w) => w.length >= 1)

          const target = currentCategory
            ? categoryCourses[currentCategory]
            : courses

          const results = target.filter((course) => {
            const normalizedTitle = normalize(course.title)
            const rawTitleLower = course.title.toLowerCase()

            const okExact = exactTerms.every((term) => {
              const re = new RegExp(`\\b${escapeRegExp(term)}\\b`, 'i')
              return re.test(rawTitleLower)
            })
            if (!okExact) return false

            return words.every((word) => normalizedTitle.includes(word))
          })

          displayResults(results, query.length)

          if ($(window).width() <= 640) {
            $('table tr td a').text('Скачать')
          }
        } else {
          // Если выбрана категория - показываем курсы
          if (currentCategory && categoryCourses[currentCategory]) {
            displayResults(categoryCourses[currentCategory])
          } else {
            displayResults([])
          }
        }
      }
    })
    .fail(() => {
      console.error('Не удалось загрузить некоторые файлы')
    })

  function displayResults(results, queryLength = 0) {
    results.sort((a, b) => a.title.localeCompare(b.title))

    let favs = getFavorites()
    let $results = $('#results')
    let $resultsCount = $('#resultsBlock p')
    $results.empty()

    if (results.length > 0) {
      $resultsCount.text(`Найдено: ${results.length}`).show()
    } else {
      $resultsCount.hide()
    }

    results.forEach((result) => {
      const isFav = favs.some((f) => f.title === result.title)

      const linksData = Array.isArray(result.url)
        ? JSON.stringify(result.url)
        : JSON.stringify([result.url])

      const linksDataCourse = encodeURIComponent(linksData)

      $results.append(`
        <tr>
          <td>${result.title}</td>
          <td>          
            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg"
              class="favorite-btn ${isFav ? 'active' : ''}"
              data-title="${result.title}"
              data-links='${linksData}'>
              <path d="M21.3144 3.17878C20.4418 1.48077 18.853 0.343763 16.9263 0.043232C16.5076 -0.0168743 15.3879 0.0181866 14.9541 0.113356C14.1623 0.283657 13.4813 0.574171 12.7601 1.05502C12.3162 1.34554 11.489 2.10688 11.1612 2.52262L10.9998 2.72297L10.8384 2.52262C10.4853 2.07683 9.69345 1.35054 9.20924 1.03499C8.2257 0.383833 7.28756 0.0682755 6.15774 0.00816917C3.53497 -0.13208 1.11898 1.54589 0.311975 4.07536C-0.121792 5.42275 -0.101616 6.92541 0.362413 8.24274C1.351 11.0377 4.42267 14.2383 9.02262 17.2637C9.9759 17.8898 10.2634 18 10.9998 18C11.7816 18 12.0186 17.9048 13.2191 17.1034C17.7081 14.1031 20.6688 10.9876 21.6372 8.24274C22.2172 6.59482 22.0962 4.70147 21.3144 3.17878Z" fill="#ffffff"/>
              <path d="M16.9263 0.0432318C18.853 0.343763 20.4418 1.48078 21.3144 3.17878C22.0962 4.70147 22.2172 6.59482 21.6372 8.24274C20.6688 10.9876 17.7081 14.1031 13.2191 17.1034C12.0186 17.9048 11.7816 18 10.9998 18C10.2634 18 9.9759 17.8898 9.02262 17.2637C4.42267 14.2383 1.351 11.0377 0.362412 8.24274C-0.101618 6.92541 -0.121793 5.42275 0.311974 4.07537C1.11898 1.54589 3.53496 -0.132078 6.15774 0.00816977C7.28755 0.0682761 8.2257 0.383834 9.20924 1.03499C9.69345 1.35054 10.4853 2.07683 10.8384 2.52262L10.9998 2.72297L11.1612 2.52262C11.489 2.10688 12.3162 1.34554 12.7601 1.05502C13.4813 0.574171 14.1623 0.283657 14.9541 0.113356C15.3879 0.0181875 16.5076 -0.0168745 16.9263 0.0432318ZM15.3728 1.32049C14.5002 1.47076 13.6125 1.89651 12.9114 2.50258C12.5533 2.80812 12.0539 3.39416 11.7412 3.87501C11.4487 4.32581 11.3075 4.45604 11.0654 4.48108C10.7779 4.51615 10.6064 4.38091 10.1877 3.76482C9.31516 2.49757 8.21057 1.69115 6.87396 1.36056C6.35949 1.23033 5.29525 1.24536 4.76565 1.38561C3.08102 1.8314 1.82512 3.12869 1.38126 4.88179C1.31569 5.14726 1.29552 5.43778 1.29552 6.129C1.29552 6.97049 1.3056 7.06065 1.43674 7.48139C1.88564 8.93396 2.79353 10.3064 4.39241 11.9343C5.75424 13.3167 7.51453 14.7492 9.48665 16.0716C10.904 17.0183 11.1057 17.0183 12.5886 16.0165C14.5607 14.6891 16.2403 13.3267 17.6072 11.9343C19.3422 10.1711 20.2653 8.72359 20.6385 7.18086C20.7696 6.6399 20.7696 5.64815 20.6385 5.02705C20.4418 4.08037 20.0484 3.32404 19.4078 2.66287C18.3284 1.54589 16.8708 1.06003 15.3728 1.32049Z" fill="#1A2E35"/>
            </svg>
            <button class="download-btn" data-links="${linksDataCourse}">
              Скачать
            </button>
          </td>
        </tr>
      `)
    })

    // Навешиваем обработчик на все кнопки
    $(document).off('click', '.download-btn')
    $(document).on('click', '.download-btn', function () {
      let links = JSON.parse(decodeURIComponent($(this).data('links')))
      links.forEach((url, index) => {
        setTimeout(() => window.open(url, '_blank'), index * 200)
      })
    })

    // Режим таблицы
    if ($('#tableCheckbox').is(':checked')) {
      $('#results td').addClass('checked')
    }

    $('#tableCheckbox').change(function () {
      if ($(this).is(':checked')) {
        $('#results td').addClass('checked')
      } else {
        $('#results td').removeClass('checked')
      }
    })

    if (results.length === 0 && queryLength >= 3) {
      $('.wrapper__notfound').show()
      $('#resultsBlock').hide()
    } else {
      $('.wrapper__notfound').hide()
      $('#resultsBlock').show()
    }

    if ($(window).width() <= 640) {
      $('table tr td a').text('Скачать')
    }
  }

  // Недавно добавленные курсы
  let newCourses = []
  let newFile = atob('ZGIvYXV0aG9yL25ldy5qc29u')

  $.getJSON(newFile, function (data) {
    newCourses = data
    displayNewCourses(newCourses)
  })

  function displayNewCourses(newCourses) {
    newCourses.sort((a, b) => a.title.localeCompare(b.title))

    let favs = getFavorites()
    let $newTableBody = $('#new')
    $newTableBody.empty()

    newCourses.forEach((course) => {
      const isFav = favs.some((f) => f.title === course.title)

      const linksData = Array.isArray(course.url)
        ? JSON.stringify(course.url)
        : JSON.stringify([course.url])

      const linksDataCourse = encodeURIComponent(linksData)

      $newTableBody.append(`
        <tr>
          <td>${course.title}</td>
          <td>
            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg"
            class="favorite-btn ${isFav ? 'active' : ''}"
              data-title="${course.title}"
              data-links='${linksData}'>
              <path d="M21.3144 3.17878C20.4418 1.48077 18.853 0.343763 16.9263 0.043232C16.5076 -0.0168743 15.3879 0.0181866 14.9541 0.113356C14.1623 0.283657 13.4813 0.574171 12.7601 1.05502C12.3162 1.34554 11.489 2.10688 11.1612 2.52262L10.9998 2.72297L10.8384 2.52262C10.4853 2.07683 9.69345 1.35054 9.20924 1.03499C8.2257 0.383833 7.28756 0.0682755 6.15774 0.00816917C3.53497 -0.13208 1.11898 1.54589 0.311975 4.07536C-0.121792 5.42275 -0.101616 6.92541 0.362413 8.24274C1.351 11.0377 4.42267 14.2383 9.02262 17.2637C9.9759 17.8898 10.2634 18 10.9998 18C11.7816 18 12.0186 17.9048 13.2191 17.1034C17.7081 14.1031 20.6688 10.9876 21.6372 8.24274C22.2172 6.59482 22.0962 4.70147 21.3144 3.17878Z" fill="#ffffff"/>
              <path d="M16.9263 0.0432318C18.853 0.343763 20.4418 1.48078 21.3144 3.17878C22.0962 4.70147 22.2172 6.59482 21.6372 8.24274C20.6688 10.9876 17.7081 14.1031 13.2191 17.1034C12.0186 17.9048 11.7816 18 10.9998 18C10.2634 18 9.9759 17.8898 9.02262 17.2637C4.42267 14.2383 1.351 11.0377 0.362412 8.24274C-0.101618 6.92541 -0.121793 5.42275 0.311974 4.07537C1.11898 1.54589 3.53496 -0.132078 6.15774 0.00816977C7.28755 0.0682761 8.2257 0.383834 9.20924 1.03499C9.69345 1.35054 10.4853 2.07683 10.8384 2.52262L10.9998 2.72297L11.1612 2.52262C11.489 2.10688 12.3162 1.34554 12.7601 1.05502C13.4813 0.574171 14.1623 0.283657 14.9541 0.113356C15.3879 0.0181875 16.5076 -0.0168745 16.9263 0.0432318ZM15.3728 1.32049C14.5002 1.47076 13.6125 1.89651 12.9114 2.50258C12.5533 2.80812 12.0539 3.39416 11.7412 3.87501C11.4487 4.32581 11.3075 4.45604 11.0654 4.48108C10.7779 4.51615 10.6064 4.38091 10.1877 3.76482C9.31516 2.49757 8.21057 1.69115 6.87396 1.36056C6.35949 1.23033 5.29525 1.24536 4.76565 1.38561C3.08102 1.8314 1.82512 3.12869 1.38126 4.88179C1.31569 5.14726 1.29552 5.43778 1.29552 6.129C1.29552 6.97049 1.3056 7.06065 1.43674 7.48139C1.88564 8.93396 2.79353 10.3064 4.39241 11.9343C5.75424 13.3167 7.51453 14.7492 9.48665 16.0716C10.904 17.0183 11.1057 17.0183 12.5886 16.0165C14.5607 14.6891 16.2403 13.3267 17.6072 11.9343C19.3422 10.1711 20.2653 8.72359 20.6385 7.18086C20.7696 6.6399 20.7696 5.64815 20.6385 5.02705C20.4418 4.08037 20.0484 3.32404 19.4078 2.66287C18.3284 1.54589 16.8708 1.06003 15.3728 1.32049Z" fill="#1A2E35"/>
            </svg>
            <button class="download-btn" data-links="${linksDataCourse}">
              Скачать
            </button>
          </td>
        </tr>
      `)
    })

    $(document).off('click', '.download-btn')
    $(document).on('click', '.download-btn', function () {
      let links = JSON.parse(decodeURIComponent($(this).data('links')))
      links.forEach((url, index) => {
        setTimeout(() => window.open(url, '_blank'), index * 200)
      })
    })
  }

  // Выбор категории
  function selectCategory(category, element) {
    const encoded = categoryMap[category]
    currentCategory = encoded

    $('#listCourses div, #mobileListCourses div').removeClass('active')
    element.addClass('active')

    $('#search').attr('placeholder', `Искать в категории «${category}»`)
    $('#mobileSummary').text(category).css('color', 'black')

    if (categoryCourses[encoded]) {
      displayResults(categoryCourses[encoded])
    } else {
      $.getJSON(atob(encoded), (data) => {
        categoryCourses[encoded] = data
        displayResults(data)
      })
    }
  }

  $('#mobileListCourses div').on('click', function () {
    const category = $(this).data('category')

    selectCategory(category, $(this))

    document.querySelector('.mobile-categories').removeAttribute('open')
  })

  $('#listCourses div').on('click', function () {
    const category = $(this).data('category')
    selectCategory(category, $(this))
  })

  // Открытие меню
  $('#menuTab').click(function () {
    $('nav').css('display', function (_, value) {
      return value === 'none' ? 'flex' : 'none'
    })
    $('table').css('margin', '0')
    $('.wrapper article').hide()
    $('.wrapper__results, .wrapper__notfound').css({
      marginLeft: '300px',
    })

    // Когда меню закрывается
    if ($(this).attr('src') === 'images/close.png') {
      $('#search').attr('placeholder', 'Искать курсы')
      $('#listCourses div').removeClass('active')
      $('#mobileListCourses div').removeClass('active')
      $('table').css('margin', 'auto')
      $('.wrapper article').show()
      $('#mobileSummary').text('Выберите категорию').css('color', '#00000050')

      // Смена иконки
      $(this).fadeOut(200, function () {
        $(this).attr('src', 'images/menu.png').fadeIn(200)
      })
      $(this).css({
        border: '1px solid var(--color)',
      })
      $('.wrapper__results, .wrapper__notfound').css({
        marginLeft: '0',
      })

      // Очистка списка и результата
      currentCategory = null
      displayResults([])
    } else {
      $(this).fadeOut(200, function () {
        $(this).attr('src', 'images/close.png').fadeIn(200)
      })
      $(this).css({
        border: '1px solid black',
      })
    }
  })

  // Добавление курса в избранное
  function getFavorites() {
    return JSON.parse(localStorage.getItem('favorites') || '[]')
  }

  function saveFavorites(list) {
    localStorage.setItem('favorites', JSON.stringify(list))
  }

  function toggleEmptyMessage() {
    if ($('#favorites tr').length === 0) {
      $('#empty-message').show()
    } else {
      $('#empty-message').hide()
    }
  }

  function toggleFavorite(course) {
    let favorites = getFavorites()
    const index = favorites.findIndex((f) => f.title === course.title)

    if (index === -1) {
      favorites.push(course) // добавить
    } else {
      favorites.splice(index, 1) // удалить
    }

    saveFavorites(favorites)
  }

  $(document).on('click', '.favorite-btn', function () {
    const svg = $(this)
    let linksRaw = svg.attr('data-links')
    let links = []

    try {
      links = JSON.parse(linksRaw)
    } catch {
      links = [linksRaw]
    }

    const course = {
      title: svg.data('title'),
      url: links,
    }

    toggleFavorite(course)
    svg.toggleClass('active')
    renderFavorites()
  })

  function renderFavorites() {
    let favorites = getFavorites()
    let $favTable = $('#favorites')

    $favTable.empty()

    favorites.forEach((course) => {
      const linksData = JSON.stringify(course.url)
      const linksDataCourse = encodeURIComponent(linksData)

      $favTable.append(`
      <tr>
        <td>${course.title}</td>
        <td>
          <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg"
            class="favorite-btn active"
            data-title="${course.title}"
            data-links='${linksData}'
            width="22" height="18">
              <path d="M21.3144 3.17878C20.4418 1.48077 18.853 0.343763 16.9263 0.043232C16.5076 -0.0168743 15.3879 0.0181866 14.9541 0.113356C14.1623 0.283657 13.4813 0.574171 12.7601 1.05502C12.3162 1.34554 11.489 2.10688 11.1612 2.52262L10.9998 2.72297L10.8384 2.52262C10.4853 2.07683 9.69345 1.35054 9.20924 1.03499C8.2257 0.383833 7.28756 0.0682755 6.15774 0.00816917C3.53497 -0.13208 1.11898 1.54589 0.311975 4.07536C-0.121792 5.42275 -0.101616 6.92541 0.362413 8.24274C1.351 11.0377 4.42267 14.2383 9.02262 17.2637C9.9759 17.8898 10.2634 18 10.9998 18C11.7816 18 12.0186 17.9048 13.2191 17.1034C17.7081 14.1031 20.6688 10.9876 21.6372 8.24274C22.2172 6.59482 22.0962 4.70147 21.3144 3.17878Z" fill="#ffffff"/>
              <path d="M16.9263 0.0432318C18.853 0.343763 20.4418 1.48078 21.3144 3.17878C22.0962 4.70147 22.2172 6.59482 21.6372 8.24274C20.6688 10.9876 17.7081 14.1031 13.2191 17.1034C12.0186 17.9048 11.7816 18 10.9998 18C10.2634 18 9.9759 17.8898 9.02262 17.2637C4.42267 14.2383 1.351 11.0377 0.362412 8.24274C-0.101618 6.92541 -0.121793 5.42275 0.311974 4.07537C1.11898 1.54589 3.53496 -0.132078 6.15774 0.00816977C7.28755 0.0682761 8.2257 0.383834 9.20924 1.03499C9.69345 1.35054 10.4853 2.07683 10.8384 2.52262L10.9998 2.72297L11.1612 2.52262C11.489 2.10688 12.3162 1.34554 12.7601 1.05502C13.4813 0.574171 14.1623 0.283657 14.9541 0.113356C15.3879 0.0181875 16.5076 -0.0168745 16.9263 0.0432318ZM15.3728 1.32049C14.5002 1.47076 13.6125 1.89651 12.9114 2.50258C12.5533 2.80812 12.0539 3.39416 11.7412 3.87501C11.4487 4.32581 11.3075 4.45604 11.0654 4.48108C10.7779 4.51615 10.6064 4.38091 10.1877 3.76482C9.31516 2.49757 8.21057 1.69115 6.87396 1.36056C6.35949 1.23033 5.29525 1.24536 4.76565 1.38561C3.08102 1.8314 1.82512 3.12869 1.38126 4.88179C1.31569 5.14726 1.29552 5.43778 1.29552 6.129C1.29552 6.97049 1.3056 7.06065 1.43674 7.48139C1.88564 8.93396 2.79353 10.3064 4.39241 11.9343C5.75424 13.3167 7.51453 14.7492 9.48665 16.0716C10.904 17.0183 11.1057 17.0183 12.5886 16.0165C14.5607 14.6891 16.2403 13.3267 17.6072 11.9343C19.3422 10.1711 20.2653 8.72359 20.6385 7.18086C20.7696 6.6399 20.7696 5.64815 20.6385 5.02705C20.4418 4.08037 20.0484 3.32404 19.4078 2.66287C18.3284 1.54589 16.8708 1.06003 15.3728 1.32049Z" fill="#1A2E35"/>
          </svg>
          <button class="download-btn" data-links='${linksDataCourse}'>
            Скачать
          </button>
        </td>
      </tr>
    `)
    })

    toggleEmptyMessage()
  }

  renderFavorites()
})
