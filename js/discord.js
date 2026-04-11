// i stole all of this from squirrel (squirrelz.xyz) thank you squirrel
fetch(`https://api.lanyard.rest/v1/users/1409704302238502935`)
    .then(r => r.json())
    .then(d => {
        const data = d.data;

        const pfp = document.getElementById('discord-pfp');
        pfp.src = `https://cdn.discordapp.com/avatars/${data.discord_user.id}/${data.discord_user.avatar}.png`;

        const statusEl = document.getElementById('discord-status');
        if (Math.random() < 0.2) {
            statusEl.textContent = 'Perchance. (see bottom of site)';
        } else {
            statusEl.textContent =
                data.discord_status === 'offline' ? 'no' : 'yes';
        }

        const customStatus = data.activities?.find(a => a.type === 4);
        const emojiEl = document.getElementById('discord-status-emoji');
        const textEl = document.getElementById('discord-status-text');

        if (customStatus) {
            emojiEl.textContent = customStatus.emoji?.name ?? '';
            textEl.textContent = customStatus.state || '';
        } else {
            emojiEl.textContent = '';
            textEl.textContent = 'no status';
        }
    })