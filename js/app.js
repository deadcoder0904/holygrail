document.addEventListener('DOMContentLoaded', () => {
	const headerAnchor = document.querySelectorAll('#header>li');
	const navAnchor = document.querySelectorAll('#nav>ul>li');
	const footerAnchor = document.querySelectorAll('#footer>li');

	function toggleColor(anchor,className) {
		anchor.classList.toggle(className);
	};

	function addColorClass(element, className) {
		element.forEach(anchor => {
			anchor.addEventListener('mouseover', () => toggleColor(anchor,className))
			anchor.addEventListener('mouseout', () => toggleColor(anchor,className))
		});
	}

	addColorClass(headerAnchor, 'headerColor');
	addColorClass(navAnchor, 'navColor');
	addColorClass(footerAnchor, 'footerColor');

});
