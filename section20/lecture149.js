/*

???????????????????????????????????? this is missing lecture ?????????????????????????????
Reverse

Reversing a Doubly Linked List in place!
逆
二重リンクリストをその場で反転！？

Reverse pseudocode

Let's visualize this!

    Create a variable called current and set it to be the head of the list
    Create a variable called tail and set it to be the head of the list
    Loop through the list and set the next property of the current node to be the prev property of the current node
    If there is no next property, set the tail to be the head and the head to be the current variable
    Return the list
逆の疑似コード
可視化しよう

currentという変数を作り、リストの先頭になるように設定する
tailという変数を作り、リストの先頭になるように設定する
リストをループして、カレントノードの次のプロパティをカレントノードのprevプロパティに設定する
nextプロパティがない場合は、tailをheadに、headをcurrent変数に設定します
リストを返す

????????????????????????????????????




Big O
of Doubly Linked Lists

Insertion -   O(1)

Removal -   O(1)

Searching -   O(N)

Access -   O(N)

Technically searching is O(N / 2), but that's still O(N)
ビッグ・オー
ダブリーリンクリストの
挿入 -O(1)

除去---O(1)

検索中-：O(N)

アクセス---O(N)

技術的には検索はO(N / 2)だが、それでもO(N)





RECAP!

    Doubly Linked Lists are almost identical to Singly Linked Lists except there is an additional pointer to previous nodes
    Better than Singly Linked Lists for finding nodes and can be done in half the time!
    However, they do take up more memory considering the extra pointer
    Doubly linked lists are used to implement other data structures and certain types of caches
RECAP!
ダブリー・リンクリストは、前のノードへのポインタが追加される以外は、シングリー・リンクリストとほぼ同じです
Singly Linked Listsよりもノードを見つけるのに優れており、半分の時間で実行できます
ただし、ポインタを追加した分、メモリを多く消費します。  !!!!!!!!!!!!!!! for job interview
二重リンクリストは、他のデータ構造やある種のキャッシュの実装に使用される
*/
