document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('generateButton').addEventListener('click', function() {
        const minLength = 12;
        const maxLength = 24;
        const passwordLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
        const charsetSelect = document.getElementById('charsetSelect');
        const selectedCharset = charsetSelect.options[charsetSelect.selectedIndex].value;
        const newPassword = generatePassword(passwordLength, selectedCharset);
        document.getElementById('passwordDisplay').textContent = `Generated Password: ${newPassword}`;
        const strengthIndicator = document.getElementById('strengthIndicator');
        const strength = getPasswordStrength(newPassword);
        strengthIndicator.textContent = `Password Strength: ${strength}`;
        strengthIndicator.className = strength.toLowerCase();
    });

    function generatePassword(length, charset) {
        let selectedCharset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        if (charset === 'alphanumericSpecial') {
            selectedCharset += '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
        }

        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * selectedCharset.length);
            password += selectedCharset.charAt(randomIndex);
        }

        return password;
    }
    // ... (diğer JavaScript kodları) ...

document.getElementById('copyPasswordButton').addEventListener('click', function() {
    const newPassword = document.getElementById('passwordDisplay').textContent.split(": ")[1];
    if (newPassword) {
        copyToClipboard(newPassword);
        const copyNotification = document.getElementById('copyNotification');
        copyNotification.style.display = 'block';
        setTimeout(() => {
            copyNotification.style.display = 'none';
        }, 2000); // Bildirimi 2 saniye sonra gizle
    }
});

function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

// ... (diğer JavaScript kodları) ...


    function getPasswordStrength(password) {
        const lengthStrength = password.length < 8 ? 'weak' : (password.length < 16 ? 'medium' : 'strong');
        const characterStrength = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password) ? 'strong' : 'medium';
        return lengthStrength === 'strong' && characterStrength === 'strong' ? 'Strong' : 'Medium';
    }
});
