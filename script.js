const answer = document.getElementById("answer");
answer.innerText = " ";
const numericButtons = document.getElementById("numericButtons");

// ============== dynamic Numeric Buttons ===============
for (let i = 1; i <= 9; i++) {
  numericButtons.innerHTML += `<button id="${i}"
                        class="px-4 py-2 text-xl text-yellow-300 uppercase bg-black border-4 border-yellow-500 shadow-[4px_4px_4px_black] active:shadow-none transition-all">
                        ${i}
                    </button>`;
}

numericButtons.innerHTML += `<button id="0"
                        class="px-4 py-2 text-xl text-yellow-300 uppercase bg-black border-4 border-yellow-500 shadow-[4px_4px_4px_black] active:shadow-none transition-all">
                        0
                    </button>
                    <button id="."
                        class="px-4 py-2 text-xl text-yellow-300 uppercase bg-black border-4 border-yellow-500 shadow-[4px_4px_4px_black] active:shadow-none transition-all">
                        .
                    </button>
                    <button id="="
                        class="px-4 py-2 text-xl text-yellow-300 uppercase bg-black border-4 border-yellow-500 shadow-[4px_4px_4px_black] active:shadow-none transition-all">
                        =
                    </button>`;

// ============== dynamic Buttons Click Events ===============
for (let i = 1; i <= 9; i++) {
  document.getElementById(`${i}`).addEventListener("click", () => {
    answer.innerText += `${i}`;
  });
}

// ============== 0 & . ===============
document.getElementById('0').addEventListener("click", () => {
  answer.innerText += `0`;
});
document.getElementById('.').addEventListener("click", () => {
  answer.innerText += `.`;
});


// ============== Clear Buttons ===============
document.getElementById('ac').addEventListener("click", () => {
  answer.innerText = ' ';
});
document.getElementById('c').addEventListener("click", () => {
  answer.innerText = answer.innerText.slice(0, -1); // Remove last character
});


// ============== Operators ===============
document.getElementById('+').addEventListener("click", () => {
  answer.innerText += `+`;
});
document.getElementById('-').addEventListener("click", () => {
  answer.innerText += `-`;
});
document.getElementById('*').addEventListener("click", () => {
  answer.innerText += `*`;
});
document.getElementById('/').addEventListener("click", () => {
  answer.innerText += `/`;
});
document.getElementById('%').addEventListener("click", () => {
  answer.innerText += `%`;
});


// ============== Doing Operations ===============
document.getElementById('=').addEventListener("click", () => {
  try {
    answer.innerText = eval(answer.innerText); // ✅ Correctly evaluates the expression
  } catch {
    answer.innerText = "Error"; // Handles invalid expressions
  }
});
