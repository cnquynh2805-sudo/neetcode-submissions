class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let words = s.trim().split(" ");
        return words[words.length - 1]. length;
    }
}
