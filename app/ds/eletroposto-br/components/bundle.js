/* @ds-bundle: {"format":4,"namespace":"EletropostoBR","components":[{"name":"Button"},{"name":"Field"},{"name":"Pill"},{"name":"StationCard"},{"name":"ServiceTile"},{"name":"TotemDisplay"},{"name":"Icon"}]} */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    return Array.prototype.filter.call(arguments, Boolean).join(' ');
  }

  /* Ícones de traço de 2 px com pontas redondas (prancha Grafismos). */
  var ICONS = {
    recarga: [['path', { d: 'M13 2L5 13.5h6.5L10.5 22 19 10h-6.5z' }]],
    mobilidade: [
      ['path', { d: 'M4 16.5h16M5 16.5l1.6-5.5h10.8l1.6 5.5M5 16.5V19M19 16.5V19' }],
      ['circle', { cx: 8, cy: 14, r: 0.6 }],
      ['circle', { cx: 16, cy: 14, r: 0.6 }]
    ],
    energia: [
      ['circle', { cx: 12, cy: 12, r: 4 }],
      ['path', { d: 'M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6L7 7M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4' }]
    ],
    'usina-virtual': [
      ['circle', { cx: 12, cy: 5, r: 2 }],
      ['circle', { cx: 5, cy: 18, r: 2 }],
      ['circle', { cx: 19, cy: 18, r: 2 }],
      ['path', { d: 'M11 7l-5 9M13 7l5 9M7 18h10' }]
    ]
  };

  /** Ícone de traço da marca. Herda a cor de `color` (currentColor). */
  function Icon(props) {
    var name = props.name || 'recarga';
    var size = props.size || 24;
    var parts = ICONS[name] || ICONS.recarga;
    var filled = props.filled && name === 'recarga';
    var a11y = props.title ? { role: 'img', 'aria-label': props.title } : { 'aria-hidden': true };
    return h(
      'svg',
      Object.assign(
        {
          className: cx('ebr-icon', props.className),
          width: size,
          height: size,
          viewBox: '0 0 24 24',
          fill: filled ? 'currentColor' : 'none',
          stroke: 'currentColor',
          strokeWidth: 2,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          focusable: 'false'
        },
        a11y
      ),
      parts.map(function (p, i) {
        return h(p[0], Object.assign({ key: i }, p[1]));
      })
    );
  }

  /** Botão. Primário (Verde Energia) no máximo uma vez por tela. */
  function Button(props) {
    var variant = props.variant || 'primary';
    var size = props.size || 'md';
    var rest = Object.assign({}, props);
    delete rest.variant; delete rest.size; delete rest.block; delete rest.className; delete rest.children;
    return h(
      'button',
      Object.assign({ type: 'button' }, rest, {
        className: cx('ebr-btn', 'ebr-btn--' + variant, size === 'sm' && 'ebr-btn--sm', props.block && 'ebr-btn--block', props.className)
      }),
      props.children
    );
  }

  /** Campo de texto com rótulo visível e dica opcionais. */
  function Field(props) {
    var autoId = React.useId();
    var id = props.id || autoId;
    var rest = Object.assign({}, props);
    delete rest.label; delete rest.hint; delete rest.className; delete rest.id;
    var hintId = props.hint ? id + '-hint' : undefined;
    return h(
      'div',
      { className: cx('ebr-field', props.className) },
      props.label ? h('label', { className: 'ebr-field__label', htmlFor: id }, props.label) : null,
      h('input', Object.assign({ type: 'text', id: id, className: 'ebr-field__input', 'aria-describedby': hintId }, rest)),
      props.hint ? h('div', { id: hintId, className: 'ebr-field__hint' }, props.hint) : null
    );
  }

  /** Etiqueta de estado ou de dado: Disponível, 150 kW, Em uso. */
  function Pill(props) {
    var tone = props.tone || 'disponivel';
    return h(
      'span',
      { className: cx('ebr-pill', 'ebr-pill--' + tone, props.icon && 'ebr-pill--icon', props.className) },
      props.icon ? h(Icon, { name: 'recarga', filled: true, size: 16 }) : null,
      props.children
    );
  }

  /** Cartão de estação: "destaque" (Verde Menta, número grande) ou "app" (branco, com ação). */
  function StationCard(props) {
    var variant = props.variant || 'destaque';
    if (variant === 'app') {
      return h(
        'div',
        { className: cx('ebr-station', 'ebr-station--app', props.className) },
        props.eyebrow ? h('div', { className: 'ebr-station__eyebrow ebr-station__eyebrow--mono' }, props.eyebrow) : null,
        props.title ? h('div', { className: 'ebr-station__title' }, props.title) : null,
        props.meta ? h('div', { className: 'ebr-station__meta' }, props.meta) : null,
        props.action ? h('div', { className: 'ebr-station__action' }, props.action) : null
      );
    }
    return h(
      'div',
      { className: cx('ebr-station', 'ebr-station--destaque', props.className) },
      props.eyebrow ? h('div', { className: 'ebr-station__eyebrow' }, props.eyebrow) : null,
      h('div', { className: 'ebr-station__power' }, props.power, ' ', h('span', { className: 'ebr-station__unit' }, props.unit || 'kW')),
      props.status ? h('div', { className: 'ebr-station__status' }, props.status) : null
    );
  }

  /** Tile de serviço do app. Selecionado = aria-pressed. */
  function ServiceTile(props) {
    var rest = Object.assign({}, props);
    delete rest.icon; delete rest.selected; delete rest.className; delete rest.children;
    return h(
      'button',
      Object.assign({ type: 'button' }, rest, {
        'aria-pressed': !!props.selected,
        className: cx('ebr-tile', props.className)
      }),
      h(Icon, { name: props.icon || 'recarga', size: 22 }),
      h('span', { className: 'ebr-tile__label' }, props.children)
    );
  }

  /** Display do totem. Sempre escuro, nos dois temas. */
  function TotemDisplay(props) {
    return h(
      'div',
      { className: cx('ebr-totem', props.className) },
      h('div', { className: 'ebr-totem__station' }, props.station || 'Estação'),
      h('div', { className: 'ebr-totem__power' }, props.power, h('span', { className: 'ebr-totem__unit' }, ' ' + (props.unit || 'kW'))),
      props.status ? h('span', { className: 'ebr-totem__status' }, props.status) : null
    );
  }

  var C = window;
  C.EletropostoBR = C.EletropostoBR || {};
  Object.assign(C.EletropostoBR, {
    Button: Button,
    Field: Field,
    Pill: Pill,
    StationCard: StationCard,
    ServiceTile: ServiceTile,
    TotemDisplay: TotemDisplay,
    Icon: Icon
  });
})();
