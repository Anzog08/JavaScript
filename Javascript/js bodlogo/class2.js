// 1. Ямар нэгэн text өгөгдөхөд палиндром эсэхийг шалгана уу. text = "level"

const text = "level";
let ug = "";

for (let i = text.length - 1; i >= 0; i--) {
  ug = ug + text[i];
}
if (ug == text) {
  console.log(true);
} else {
  console.log(false);
}
// 2. Array dotor heden palindrom text baigaag tool. ["madam", "hello", "radar", "world"]

// 3. Шүлэг өгөгдсөн бол хэдэн үсэг орсныг тоолно уу.
// I'm tired of being what you want me to be
// Feeling so faithless, lost under the surface
// Don't know what you're expecting of me
// Put under the pressure of walking in your shoes

// 4. Ugugdsun string dund tsipr baigaag esehiig shalga. "4life"
