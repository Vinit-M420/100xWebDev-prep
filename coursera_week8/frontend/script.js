document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('h2, h3, h4, p, span, label');
    
    elements.forEach(element => {
        if (element.innerHTML.includes('100xCoursera')) {
            element.innerHTML = element.innerHTML
                .replace(/100xCoursera, because/g, '<span class="brand-name">100xCoursera,</span> because')
                .replace(/100xCoursera,/g, '<span class="brand-name">100xCoursera,</span>')
                .replace(/100xCoursera/g, '<span class="brand-name">100xCoursera</span>');
        }
    });
});
