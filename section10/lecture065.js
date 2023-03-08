/*

Naive String Search

    Suppose you want to count the number of times a smaller string appears in a longer string
    A straightforward approach involves checking pairs of characters individually

ナイーブストリングサーチ
例えば、長い文字列の中に小さい文字列が何回現れるかを数えたいとします。
簡単な方法は、文字のペアを個別にチェックすることです




Pseudocode

    Loop over the longer string
    Loop over the shorter string
    If the characters don't match, break out of the inner loop
    If the characters do match, keep going
    If you complete the inner loop and find a match, increment the count of matches
    Return the count

疑似コード
長い方の文字列をループさせる
短い方の文字列をループさせる
文字が一致しない場合、内部ループから抜け出す
文字が一致する場合は、そのまま進みます
内部ループを完了し、マッチが見つかった場合、マッチのカウントをインクリメントする
カウントを返す
*/
