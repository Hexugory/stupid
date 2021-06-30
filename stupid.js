const { createCanvas, loadImage } = require('canvas');
const { writeFileSync, readFileSync } = require('fs');
const { readdir } = require('fs/promises');

readdir('in').then((files) => {
    for (const file of files) {
        const p = JSON.parse(readFileSync('in/'+file));
        const canvas = createCanvas(350, 610);
        const ctx = canvas.getContext('2d');
        loadImage(`voice_fucker_avatars/${p.name}.png`).then((image) => {
            ctx.fillStyle = '#36393f';
            ctx.fillRect(0, 0, 350, 610);

            ctx.drawImage(image, 127, 24);
            
            ctx.fillStyle = '#dcddde';
            ctx.textAlign = "center";
            ctx.font = '30px Bebas Neue';
            ctx.fillText(p.name, 175, 150);

            ctx.font = '16px Bebas Neue';
            ctx.strokeStyle = '#dcddde';
            ctx.lineWidth = 2;

            ctx.fillStyle = '#dcddde';
            ctx.textAlign = "left";
            ctx.fillText('chaotic', 25, 175);
            ctx.textAlign = "right";
            ctx.fillText('lawful', 325, 175);
            ctx.fillStyle = '#5865F2';
            ctx.fillRect(25, 180, Math.max(0, 300-(p.law/10*300)), 25);
            ctx.fillStyle = '#ff3f46';
            ctx.fillRect(25+(300-(Math.max(0, p.law/10*300))), 180, Math.max(0, p.law/10*300), 25);
            ctx.strokeRect(25, 180, 300, 25);
            ctx.beginPath();
            ctx.moveTo(25+(300-(p.law/10*300)), 180);
            ctx.lineTo(25+(300-(p.law/10*300)), 205);
            ctx.stroke();

            ctx.fillStyle = '#dcddde';
            ctx.textAlign = "left";
            ctx.fillText('cringe', 25, 230);
            ctx.textAlign = "right";
            ctx.fillText('based', 325, 230);
            ctx.fillStyle = '#5865F2';
            ctx.fillRect(25, 235, Math.max(0, 300-(p.based/10*300)), 25);
            ctx.fillStyle = '#ff3f46';
            ctx.fillRect(25+(300-(Math.max(0, p.based/10*300))), 235, Math.max(0, p.based/10*300), 25);
            ctx.strokeRect(25, 235, 300, 25);
            ctx.beginPath();
            ctx.moveTo(25+(300-(p.based/10*300)), 235);
            ctx.lineTo(25+(300-(p.based/10*300)), 260);
            ctx.stroke();

            ctx.fillStyle = '#dcddde';
            ctx.textAlign = "left";
            ctx.fillText('evil', 25, 285);
            ctx.textAlign = "right";
            ctx.fillText('good', 325, 285);
            ctx.fillStyle = '#5865F2';
            ctx.fillRect(25, 290, Math.max(0, 300-(p.good/10*300)), 25);
            ctx.fillStyle = '#ff3f46';
            ctx.fillRect(25+(300-(Math.max(0, p.good/10*300))), 290, Math.max(0, p.good/10*300), 25);
            ctx.strokeRect(25, 290, 300, 25);
            ctx.beginPath();
            ctx.moveTo(25+(300-(p.good/10*300)), 290);
            ctx.lineTo(25+(300-(p.good/10*300)), 315);
            ctx.stroke();

            ctx.fillStyle = '#dcddde';
            ctx.textAlign = "left";
            ctx.fillText('zoomer', 25, 340);
            ctx.textAlign = "right";
            ctx.fillText('boomer', 325, 340);
            ctx.fillStyle = '#5865F2';
            ctx.fillRect(25, 345, Math.max(0, 300-(p.boomer/10*300)), 25);
            ctx.fillStyle = '#ff3f46';
            ctx.fillRect(25+(300-(Math.max(0, p.boomer/10*300))), 345, Math.max(0, p.boomer/10*300), 25);
            ctx.strokeRect(25, 345, 300, 25);
            ctx.beginPath();
            ctx.moveTo(25+(300-(p.boomer/10*300)), 345);
            ctx.lineTo(25+(300-(p.boomer/10*300)), 370);
            ctx.stroke();

            ctx.fillStyle = '#dcddde';
            ctx.textAlign = "left";
            ctx.fillText('doomer', 25, 395);
            ctx.textAlign = "right";
            ctx.fillText('bloomer', 325, 395);
            ctx.fillStyle = '#5865F2';
            ctx.fillRect(25, 400, Math.max(0, 300-(p.bloomer/10*300)), 25);
            ctx.fillStyle = '#ff3f46';
            ctx.fillRect(25+(300-(Math.max(0, p.bloomer/10*300))), 400, Math.max(0, p.bloomer/10*300), 25);
            ctx.strokeRect(25, 400, 300, 25);
            ctx.beginPath();
            ctx.moveTo(25+(300-(p.bloomer/10*300)), 400);
            ctx.lineTo(25+(300-(p.bloomer/10*300)), 425);
            ctx.stroke();

            ctx.fillStyle = '#dcddde';
            ctx.textAlign = "left";
            ctx.fillText('nofooper', 25, 450);
            ctx.textAlign = "right";
            ctx.fillText('coomer', 325, 450);
            ctx.fillStyle = '#5865F2';
            ctx.fillRect(25, 455, Math.max(0, 300-(p.coomer/10*300)), 25);
            ctx.fillStyle = '#ff3f46';
            ctx.fillRect(25+(300-(Math.max(0, p.coomer/10*300))), 455, Math.max(0, p.coomer/10*300), 25);
            ctx.strokeRect(25, 455, 300, 25);
            ctx.beginPath();
            ctx.moveTo(25+(300-(p.coomer/10*300)), 455);
            ctx.lineTo(25+(300-(p.coomer/10*300)), 480);
            ctx.stroke();

            ctx.fillStyle = '#dcddde';
            ctx.textAlign = "left";
            ctx.fillText('virgin', 25, 505);
            ctx.textAlign = "right";
            ctx.fillText('chad', 325, 505);
            ctx.fillStyle = '#5865F2';
            ctx.fillRect(25, 510, Math.max(0, 300-(p.chad/10*300)), 25);
            ctx.fillStyle = '#ff3f46';
            ctx.fillRect(25+(300-(Math.max(0, p.chad/10*300))), 510, Math.max(0, p.chad/10*300), 25);
            ctx.strokeRect(25, 510, 300, 25);
            ctx.beginPath();
            ctx.moveTo(25+(300-(p.chad/10*300)), 510);
            ctx.lineTo(25+(300-(p.chad/10*300)), 535);
            ctx.stroke();

            ctx.fillStyle = '#dcddde';
            ctx.textAlign = "left";
            ctx.fillText('brainlet', 25, 560);
            ctx.textAlign = "right";
            ctx.fillText('gigabrain', 325, 560);
            ctx.fillStyle = '#5865F2';
            ctx.fillRect(25, 565, Math.max(0, 300-(p.gigabrain/10*300)), 25);
            ctx.fillStyle = '#ff3f46';
            ctx.fillRect(25+(300-(Math.max(0, p.gigabrain/10*300))), 565, Math.max(0, p.gigabrain/10*300), 25);
            ctx.strokeRect(25, 565, 300, 25);
            ctx.beginPath();
            ctx.moveTo(25+(300-(p.gigabrain/10*300)), 565);
            ctx.lineTo(25+(300-(p.gigabrain/10*300)), 590);
            ctx.stroke();
          
            writeFileSync(`out/${p.name}.png`, canvas.toBuffer());
            console.log(p.name);
        });
    }
});