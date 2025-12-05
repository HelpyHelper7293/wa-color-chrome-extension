// Visit YouTube: https://www.youtube.com/@helpyhelper7293
document.addEventListener("DOMContentLoaded", () => {
    let selectedColor = null;

    const picker = document.getElementById("color_picker");
    const acceptBtn = document.getElementById("color_accept");

    const textBtn = document.getElementById("text_color");
    const bubbleOutBtn = document.getElementById("bubble_color_outgoing");
    const bubbleInBtn = document.getElementById("bubble_color_incoming");
	const labelBtn = document.getElementById("contact_label_color");

    acceptBtn.addEventListener("click", () => {
        selectedColor = picker.value;
        console.log("Accepted color:", selectedColor);
    });

    const applyToPage = async (func) => {
        if (!selectedColor) {
            alert("Please pick a color and click 'Accept Color' first.");
            return;
        }

        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            args: [selectedColor],
            func
        });
    };

    textBtn.addEventListener("click", () => {
        applyToPage((color) => {
            console.log("Applying text color:", color);
            const style = document.createElement("style");
            style.textContent = `
                ._amk4 { color: ${color} !important; }
            `;
            document.documentElement.appendChild(style);
        });
    });
	
    bubbleOutBtn.addEventListener("click", () => {
        applyToPage((color) => {
            console.log("Applying bubble color:", color);
            const style = document.createElement("style");
            style.textContent = `
                .message-out ._amk6 {
				background-color: ${color} !important;
				}
            `;
            document.documentElement.appendChild(style);
        });
    });
	
    bubbleInBtn.addEventListener("click", () => {
        applyToPage((color) => {
            console.log("Applying bubble color:", color);
            const style = document.createElement("style");
            style.textContent = `
                .message-in ._amk6 {
				background-color: ${color} !important;
				}
            `;
            document.documentElement.appendChild(style);
        });
    });
	
    labelBtn.addEventListener("click", () => {
        applyToPage((color) => {
            console.log("Applying label color:", color);
            const style = document.createElement("style");
            style.textContent = `
                ._ak8q {
				color: ${color} !important;
				}
            `;
            document.documentElement.appendChild(style);
        });
    });
});
