const IconSelector = (target, returnSelectors = false) => {
    const iconSet = {
        _recent: {
            title: 'Usados más recientemente',
            groupIcon: '🕒',
            set: []
        },
        faces: {
            title: 'Caras',
            groupIcon: '😃',
            set: ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🙂', '😉', '😊', '😍', '😘', '😚', '😋', '😜', '😝', '😏', '😒', '😌', '😔', '😪', '😷', '😵', '😎', '😕', '😟', '😲', '😳', '😨', '😰', '😥', '😢', '😭', '😱', '😖', '😣', '😞', '😓', '😩', '😫', '😤', '😡', '😠', '👿', '💀', '💩', '👹', '👺', '👻', '👽', '👾', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾', '🙈', '🙉', '🙊']
        },
        emotions: {
            title: 'Emociones',
            groupIcon: '💋',
            set: ['💋', '💌', '💘', '💝', '💖', '💗', '💓', '💞', '💕', '💟', '💔', '❤', '💛', '💚', '💙', '💜', '💯', '💢', '💥', '💫', '💦', '💨', '💣', '💬', '💤']
        },
        hands: {
            title: 'Manos',
            groupIcon: '👋',
            set: ['👋', '✋', '👌', '✌', '👈', '👉', '👆', '👇', '☝', '👍', '👎', '✊', '👊', '👏', '🙌', '👐', '🙏', '💅']
        },
        body: {
            title: 'Partes del cuerpo',
            groupIcon: '💪',
            set: ['💪', '👂', '👃', '👀', '👅', '👄']
        },
        people: {
            title: 'Personas y familia',
            groupIcon: '🚶',
            set: ['👶', '👦', '👧', '👱', '👨', '👩', '👴', '👵', '🙍', '🙎', '🙅', '🙆', '💁', '🙋', '🙇', '👮', '💂', '👷', '👸', '👳', '👲', '👰', '👼', '🎅', '💆', '💇', '🚶', '🏃', '💃', '👯', '🏂', '🏄', '🏊', '🛀', '👫', '💏', '💑', '👪']
        },
        animals: {
            title: 'Animales',
            groupIcon: '🐵',
            set: ['🐵', '🐒', '🐶', '🐩', '🐺', '🐱', '🐯', '🐴', '🐎', '🐮', '🐷', '🐗', '🐽', '🐑', '🐫', '🐘', '🐭', '🐹', '🐰', '🐻', '🐨', '🐼', '🐾', '🐔', '🐣', '🐤', '🐥', '🐦', '🐧', '🐸', '🐢', '🐍', '🐲', '🐳', '🐬', '🐟', '🐠', '🐡', '🐙', '🐚', '🐌', '🐛', '🐜', '🐝', '🐞']
        },
        plants: {
            title: 'Plantas',
            groupIcon: '🌼',
            set: ['💐', '🌸', '💮', '🌹', '🌺', '🌻', '🌼', '🌷', '🌱', '🌴', '🌵', '🌾', '🌿', '🍀', '🍁', '🍂', '🍃']
        },
        food: {
            title: 'Comida y frutas',
            groupIcon: '🍖',
            set: ['🍇', '🍈', '🍉', '🍊', '🍌', '🍍', '🍎', '🍏', '🍑', '🍒', '🍓', '🍅', '🍆', '🌽', '🍄', '🌰', '🍞', '🍖', '🍗', '🍔', '🍟', '🍕', '🍳', '🍲', '🍱', '🍘', '🍙', '🍚', '🍛', '🍜', '🍝', '🍠', '🍢', '🍣', '🍤', '🍥', '🍡', '🍦', '🍧', '🍨', '🍩', '🍪', '🎂', '🍰', '🍫', '🍬', '🍭', '🍮', '🍯']
        },
        drink: {
            title: 'Bebida',
            groupIcon: '☕',
            set: ['☕', '🍵', '🍶', '🍷', '🍸', '🍹', '🍺', '🍻']
        },
        places: {
            title: 'Lugares',
            groupIcon: '🌏',
            set: ['🌏', '🗾', '🌋', '🗻', '🏠', '🏡', '🏢', '🏣', '🏥', '🏦', '🏨', '🏩', '🏪', '🏫', '🏬', '🏭', '🏯', '🏰', '💒', '🗼', '🗽', '⛪', '⛲', '⛺', '🌁', '🌃', '🌄', '🌅', '🌆', '🌇', '🌉', '♨', '🌌', '🎠', '🎡', '🎢', '💈', '🎪']
        },
        transport: {
            title: 'Transporte',
            groupIcon: '🚚',
            set: ['🚃', '🚄', '🚅', '🚇', '🚉', '🚌', '🚑', '🚒', '🚓', '🚕', '🚗', '🚙', '🚚', '🚲', '🚏', '⛽', '🚨', '🚥', '🚧', '⚓', '⛵', '🚤', '🚢', '✈', '💺', '🚀']
        },
        time: {
            title: 'Tiempo',
            groupIcon: '⌛',
            set: ['⌛', '⏳', '⌚', '⏰', '🕛', '🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚']
        },
        sky: {
            title: 'Cielo y clima',
            groupIcon: '🌙',
            set: ['🌑', '🌓', '🌔', '🌕', '🌙', '🌛', '☀', '🌟', '🌠', '☁', '⛅', '🌀', '🌈', '🌂', '☔', '⚡', '❄', '⛄', '🔥', '💧', '🌊']
        },
        activities: {
            title: 'Actividades',
            groupIcon: '⚽',
            set: ['🎃', '🎄', '🎆', '🎇', '✨', '🎈', '🎉', '🎊', '🎋', '🎍', '🎎', '🎏', '🎐', '🎑', '🎀', '🎁', '🎫', '🏆', '⚽', '⚾', '🏀', '🏈', '🎾', '🎳', '⛳', '🎣', '🎽', '🎿', '🎯', '🎱', '🔮', '🎮', '🎰', '🎲', '♠', '♥', '♦', '♣', '🃏', '🀄', '🎴', '🎭', '🎨']
        },
        objects: {
            title: 'Objetos',
            groupIcon: '💡',
            set: ['👓', '👔', '👕', '👖', '👗', '👘', '👙', '👚', '👛', '👜', '👝', '🎒', '👞', '👟', '👠', '👡', '👢', '👑', '👒', '🎩', '🎓', '💄', '💍', '💎', '🔊', '📢', '📣', '🔔', '🎼', '🎵', '🎶', '🎤', '🎧', '📻', '🎷', '🎸', '🎹', '🎺', '🎻', '📱', '📲', '☎', '📞', '📟', '📠', '🔋', '🔌', '💻', '💽', '💾', '💿', '📀', '🎥', '🎬', '📺', '📷', '📹', '📼', '🔍', '🔎', '💡', '🔦', '🏮', '📔', '📕', '📖', '📗', '📘', '📙', '📚', '📓', '📒', '📃', '📜', '📄', '📰', '📑', '🔖', '💰', '💴', '💵', '💸', '💳', '💹', '💱', '💲', '✉', '📧', '📨', '📩', '📤', '📥', '📦', '📫', '📪', '📮', '✏', '✒', '📝', '💼', '📁', '📂', '📅', '📆', '📇', '📈', '📉', '📊', '📋', '📌', '📍', '📎', '📏', '📐', '✂', '🔒', '🔓', '🔏', '🔐', '🔑', '🔨', '🔫', '🔧', '🔩', '🔗', '📡', '💉', '💊', '🚪', '🚽', '🚬', '🗿', '🏧']
        },
        symbols: {
            title: 'Símbolos',
            groupIcon: '🔞',
            set: ['♿', '🚹', '🚺', '🚻', '🚼', '🚾', '⚠', '⛔', '🚫', '🚭', '🔞', '🔃', '🔙', '🔚', '🔛', '🔜', '🔝', '🔯', '♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓', '⛎', '▶', '⏩', '◀', '⏪', '🔼', '⏫', '🔽', '⏬', '🎦', '📶', '📳', '📴', '♻', '🔱', '📛', '🔰', '⭕', '✅', '❌', '❎', '➕', '➖', '➗', '➰', '➿', '❓', '❔', '❕', '❗', '#️⃣', '0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟', '🔠', '🔡', '🔢', '🔣', '🔤', '🅰', '🆎', '🅱', '🆑', '🆒', '🆓', 'ℹ', '🆔', 'Ⓜ', '🆕', '🆖', '🅾', '🆗', '🅿', '🆘', '🆙', '🆚', '🈁', '🈶', '🈯', '🉐', '🈹', '🈚', '🈲', '🉑', '🈸', '🈴', '🈳', '㊗', '㊙', '🈺', '🈵', '🔴', '🔵', '⚪', '⚫', '◼', '◻', '◽', '◾', '▫', '▪', '🔶', '🔷', '🔸', '🔹', '🔺', '🔻', '💠', '🔘', '🔳']
        }
    };

    // helpers
    const createElement = code => {
        let div = document.createElement('div');
        div.innerHTML = code.trim();
        return div.firstChild;
    };
    const getStorageValues = () => localStorage.getItem('iconselector') || false;
    const setStorageValue = icon => {
        let current = getStorageValues() || '';
        let arr = current.split(' ');
        const len = arr.length;

        if (current.lastIndexOf(icon) !== -1) {
            arr = arr.filter(el => el !== icon);
            current = arr.join(' ');
        }
        else if (len === 50) {
            arr.splice(49, 1);
            current = arr.join(' ');
        }
        localStorage.setItem('iconselector', icon + (!!current.length ? ' ' + current : ''));
    };

    // structures
    const opener = createElement('<div id="iconselector_opener" title="Insertar emoji">😃</div>');
    const structure = createElement('<div id="iconselector"><div class="close"><span>&times;</span></div><div class="iconlist-wrap"><div class="iconlist"></div></div><div class="grouplist-wrap"><div class="grouplist"></div></div></div>');

    // append styles
    const styles = '#iconselector_opener, #iconselector .close, #iconselector span{cursor:pointer}#iconselector .iconlist-wrap::-webkit-scrollbar, #iconselector .grouplist-wrap::-webkit-scrollbar{width:4px;height:4px}#iconselector .iconlist-wrap::-webkit-scrollbar-button, #iconselector .grouplist-wrap::-webkit-scrollbar-button{display:none}#iconselector .iconlist-wrap::-webkit-scrollbar-track-piece, #iconselector .grouplist-wrap::-webkit-scrollbar-track-piece{background:white}#iconselector .iconlist-wrap::-webkit-scrollbar-thumb, #iconselector .grouplist-wrap::-webkit-scrollbar-thumb{background:#999}#iconselector, #iconselector *{box-sizing:content-box}#iconselector{display:none;width:100%;background:white}#iconselector.active{display:block;border:solid 1px #ccc;border-radius:2px;padding:6px;box-shadow:inset 0 0 5px 0 #ccc}#iconselector span{padding:4px;width:22px;height:22px;font-size:16px}#iconselector span:hover{background:#ccc}#iconselector .close{text-align:right;font-family:Tahoma,sans-serif;margin-bottom:4px}#iconselector .close span{padding:0 4px}#iconselector .close span:hover{background:red;color:white;padding:0 4px}#iconselector .iconlist-wrap{overflow:hidden;height:144px}#iconselector .iconlist-wrap:hover{overflow-y:auto}#iconselector .iconlist{display:flex;flex-wrap:wrap;text-align:center}#iconselector .grouplist-wrap{overflow:hidden;margin-top:9px;border-top:solid 1px #ccc;padding-top:2px}#iconselector .grouplist-wrap:hover{overflow-x:auto}#iconselector .grouplist{display:flex;text-align:center}#iconselector .grouplist span.selected{border-bottom:solid 4px #11aff7}';
    const style = document.createElement('style');
    style.rel = 'stylesheet';
    style.type = 'text/css';
    style.innerHTML = styles;
    document.head.appendChild(style);

    // methods
    const PositionateThings = () => {
        opener.style.position = 'absolute';
        opener.style.top = 0 + 'px';
        opener.style.left = target.offsetWidth + 4 + 'px';
        structure.style.maxWidth = target.offsetWidth + 'px';
        //structure.style.top = target.getBoundingClientRect().top + window.scrollY + target.offsetHeight + 2 + 'px';
        //structure.style.left = target.getBoundingClientRect().left + 'px';
    };
    const AddToRecents = icon => {
        if (iconSet._recent.set.includes(icon)) {
            const index = iconSet._recent.set.indexOf(icon);
            if (index > -1) iconSet._recent.set.splice(index, 1);
        }
        if (iconSet._recent.set.length === 50) iconSet._recent.set.splice(49, 1);
        iconSet._recent.set.unshift(icon);
        setStorageValue(icon);
        RewriteRecents();
    };
    const RewriteRecents = () => {
        structure.querySelectorAll('.iconlist span[data-group="_recent"]').forEach(el => el.remove());
        iconSet._recent.set.forEach(icon => structure.querySelector('.iconlist').innerHTML += `<span data-group="_recent" style="display: none;">${icon}</span>`);
        if (structure.querySelector('.grouplist span[data-group="_recent"]').classList.contains('selected')) {
            structure.querySelectorAll('.iconlist span').forEach(el => el.style.display = 'none');
            structure.querySelectorAll(`.iconlist span[data-group="_recent"]`).forEach(el => el.style.display = 'block');
        }
    };

    // filling
    let recent = getStorageValues();
    if (recent) recent.split(' ').forEach(el => iconSet._recent.set.push(el));
    for (let [key, value] of Object.entries(iconSet)) {
        structure.querySelector('.grouplist').innerHTML += `<span data-group="${key}" title="${value.title}">${value.groupIcon}</span>`;
        value.set.forEach(icon => {
            structure.querySelector('.iconlist').innerHTML += `<span data-group="${key}">${icon}</span>`;
        });
    }

    // events & actions
    //window.addEventListener('scroll', () => structure.style.top = target.getBoundingClientRect().top + target.offsetHeight + 2 + 'px');
    target.addEventListener('blur', () => {
        target.dataset.position = target.selectionStart;
    });
    opener.addEventListener('click', ev => {
        ev.preventDefault();
        if (structure.classList.contains('active')) {
            target.focus();
            return;
        }
        PositionateThings();
        structure.classList.add('active');
        target.focus();
    });
    structure.querySelector('.close').addEventListener('click', ev => {
        ev.preventDefault();
        structure.classList.remove('active')
    });
    structure.querySelectorAll('.grouplist span').forEach(el => {
        el.addEventListener('click', () => {
            el.parentElement.childNodes.forEach(n => n.classList.remove('selected'));
            el.classList.add('selected');
            structure.querySelectorAll('.iconlist span').forEach(el => el.style.display = 'none');
            structure.querySelectorAll(`.iconlist span[data-group="${el.dataset.group}"]`).forEach(el => el.style.display = 'block');
        });
    });
    structure.querySelector('.grouplist').addEventListener('wheel', ev => {
        ev.preventDefault();
        ev.currentTarget.parentElement.scrollTo(ev.currentTarget.parentElement.scrollLeft += +ev.deltaY, 0)
    });
    structure.querySelector('.iconlist').addEventListener('click', ev => {
        if (ev.target.tagName === 'SPAN') {
            let currentValue = target.value;
            let position = +target.dataset.position || 0;
            target.value = currentValue.substring(0, position) + ev.target.innerText + currentValue.substring(position);
            let newPosition = position + ev.target.innerText.length;
            target.dataset.position = newPosition;
            target.focus();
            target.setSelectionRange(newPosition, newPosition);
            AddToRecents(ev.target.innerText);
        }
    });

    // structure positioning
    PositionateThings();

    // insert to dom
    target.parentElement.style.position = 'relative';
    target.parentElement.appendChild(structure);
    target.parentElement.appendChild(opener);
    //document.body.appendChild(opener);
    //document.body.appendChild(structure);

    // start with recent or first
    if (!!iconSet._recent.set.length) structure.querySelector('.grouplist span[data-group="_recent"]').click();
    else structure.querySelector(`.grouplist span[data-group="${Object.keys(iconSet)[1]}"]`).click();

    if (returnSelectors === true) return [opener, structure];
};
