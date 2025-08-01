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
    'Бизнес': 'ZGIvYXV0aG9yL2J1c2luZXNzLmpzb24=',
    'Дети и родители': 'ZGIvYXV0aG9yL0NoaWxkcmVuICYgUGFyZW50cy5qc29u',
    'Дизайн и живопись': 'ZGIvYXV0aG9yL2Rlc2lnbi5qc29u',
    'Другое': 'ZGIvYXV0aG9yL290aGVyLmpzb24=',
    'Здоровье и спорт': 'ZGIvYXV0aG9yL0hlYWx0aCAmIFNwb3J0cy5qc29u',
    'Имидж и стиль': 'ZGIvYXV0aG9yL3N0eWxlLmpzb24=',
    'Инвестиции и форекс': 'ZGIvYXV0aG9yL2ludmVzdG1lbnQuanNvbg==',
    'Иностранные языки': 'ZGIvYXV0aG9yL2xhbmd1YWdlcy5qc29u',
    'Кулинария': 'ZGIvYXV0aG9yL2Nvb2tpbmcuanNvbg==',
    'Маркетинг и реклама': 'ZGIvYXV0aG9yL21hcmtldGluZy5qc29u',
    'Музыка': 'ZGIvYXV0aG9yL211c2ljLmpzb24=',
    'Нейросети': 'ZGIvYXV0aG9yL25ldXJvbmV0Lmpzb24=',
    'Пикап, искусство соблазнения': 'ZGIvYXV0aG9yL3BpY2t1cC5qc29u',
    'Программирование и сайтостроение': 'ZGIvYXV0aG9yL3Byb2dyYW1taW5nLmpzb24=',
    'Психология и саморазвитие': 'ZGIvYXV0aG9yL3BzeWNob2xvZ3kuanNvbg==',
    'Ремонт и строительство': 'ZGIvYXV0aG9yL2NvbnN0cnVjdGlvbi5qc29u',
    'Сделай сам': 'ZGIvYXV0aG9yL0RJWS5qc29u',
    'Схемы заработка': 'ZGIvYXV0aG9yL2Vhcm4uanNvbg==',
    'Фото и видео': 'ZGIvYXV0aG9yL1Bob3RvcyAmIFZpZGVvcy5qc29u',
    'Фриланс': 'ZGIvYXV0aG9yL2ZyZWVsYW5jZS5qc29u',
    'Хакинг и кибербезопасность': 'ZGIvYXV0aG9yL2hhY2tpbmcuanNvbg==',
    'Эзотерика': 'ZGIvYXV0aG9yL2Vzb3RlcmljaXNtLmpzb24=',
    'Путешествия': 'ZGIvYXV0aG9yL2pvdXJuZXlzLmpzb24=',
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
          $('#searchBlock').css({
            marginTop: '1rem',
          })

          // Если навигация отображается, меняем отступ результата
          if ($('.wrapper nav').is(':visible')) {
            $('#resultsBlock').css('margin', '0 1rem 0')
          }
        } else {
          if (!currentCategory) {
            $('.wrapper article:hidden').fadeIn(300)
            $('#searchBlock').css({
              margin: '0 1rem',
            })
          } else {
            $('.wrapper article').hide()
            $('#searchBlock').css({
              marginTop: '1rem',
            })
          }
          
          $('#resultsBlock').css('margin', '0 1rem')
          $('.wrapper nav').css('marginTop', '0.5rem')
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

    let $results = $('#results')
    let $resultsCount = $('#resultsBlock p')
    $results.empty()

    // Показываем кол-во найденных курсов
    if (results.length > 0) {
      $resultsCount.text(`Найдено: ${results.length}`).show()
    } else {
      $resultsCount.hide()
    }

    results.forEach((result) => {
      let cloud = result.cloud ? `(${result.cloud})` : ''
      let links = Array.isArray(result.url)
        ? result.url
            .map(
              (url) => `<a target="_blank" href="${url}">${url}</a> ${cloud}`
            )
            .join('<br>')
        : `<a target="_blank" href="${result.url}">${result.url}</a> ${cloud}`

      $results.append(`<tr>
                      <td>${result.title}</td>
                      <td>
                        ${links}
                      </td>
                    </tr>`)
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

    let $newTableBody = $('#new')
    $newTableBody.empty()

    newCourses.forEach((course) => {
      let cloud = course.cloud ? `(${course.cloud})` : ''
      let links = Array.isArray(course.url)
        ? course.url
            .map(
              (url) => `<a target="_blank" href="${url}">${url}</a> ${cloud}`
            )
            .join('<br>')
        : `<a target="_blank" href="${course.url}">${course.url}</a> ${cloud}`

      $newTableBody.append(`<tr>
                            <td>${course.title}</td>
                            <td>${links}</td>
                          </tr>`)
    })
  }

  // Открытие / Закрытие окна NEW
  $('.newfunc').click(function () {
    $('.new').css({ display: 'flex' }).fadeIn(400)
    $('.nav, #results').fadeOut(400)

    if ($(window).width() <= 640) {
      $('table tr td a').text('Скачать')
      $('.new p:first-child').css({
        textAlign: 'left',
        width: 'calc(100% - 50px - 2rem)',
      })
    }
  })

  $('.newclose').click(function () {
    $('.new').fadeOut(400)
    $('.nav, #results').fadeIn(400)
  })

  // Выбор категории
  $('#list-courses').on('change', function () {
    const category = $(this).val().trim()
    const file = categoryMap[category]

    if (!file) {
      // Сброс, если выбрана несуществующая категория
      currentCategory = null
      $('#search').attr('placeholder', 'Искать курсы')
      $('#results').empty()
      $('#list-courses')
        .attr('placeholder', 'Например, Бизнес')
        .removeClass('active-category')
      return
    }

    currentCategory = category
    $('#search').attr('placeholder', `Искать в категории «${category}»`)
    $('#results').css('margin', '0')

    $('.wrapper article:visible').fadeOut(300)
    $('#searchBlock').css({
      marginTop: '1rem',
    })

    if (categoryCourses[category]) {
      displayResults(categoryCourses[category])
    } else {
      $.getJSON(atob(file), (data) => {
        categoryCourses[category] = data
        displayResults(data)
      })
    }

    $('#list-courses')
      .val('')
      .attr('placeholder', `${category}`)
      .addClass('active-category')
  })

  // Открытие меню
  $('#menuTab').click(function () {
    $('nav').css('display', function (_, value) {
      return value === 'none' ? 'flex' : 'none'
    })

    // Когда меню закрывается
    if ($(this).attr('src') === 'images/close.png') {
      $('#search').attr('placeholder', 'Искать курсы')

      // Смена иконки
      $(this).fadeOut(200, function () {
        $(this).attr('src', 'images/menu.png').fadeIn(200)
      })
      $(this).css({
        border: '1px solid var(--color)',
      })

      // Очистка списка и результата
      currentCategory = null
      $('.wrapper article').show()
      $('#searchBlock').css({
        position: 'static',
        margin: '0 1rem'
      })
      $('#list-courses')
        .val('')
        .attr('placeholder', 'Например, Бизнес')
        .removeClass('active-category')
      displayResults([])
    } else {
      $(this).fadeOut(200, function () {
        $(this).attr('src', 'images/close.png').fadeIn(200)
      })
      $(this).css({
        border: '1px solid black',
      })
    }

    $('#resultsBlock').css('margin', '0 1rem 0')
  })
})
