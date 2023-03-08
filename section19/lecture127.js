/*


REVERSE

  13   >   27    >   32    >    71
 head                          tail

  13   <   27    <   32    <    71
 tail                          head

Reversing the Linked List
リバース
リンクリストの反転

を配置！
in place!


Reverse pseudocode

    Swap the head and tail
    Create a variable called next
    Create a variable called prev
    Create a variable called node and initialize it to the head property
    Loop through the list
    Set next to be the next property on whatever node is
    Set the next property on the node to be whatever prev is
    Set prev to be the value of the node variable
    Set the node variable to be the value of the next variable
    Once you have finished looping, return the list

Let's visualize this!
https://visualgo.net/en/list?slide=1
逆の疑似コード
可視化しよう

ヘッドとテールを交換する
nextという変数を作成します。
prevという変数を作成します。
nodeという変数を作成し、headプロパティに初期化します。
リストをループする
nextを、どのノードであれ、次のプロパティに設定する。
ノードの次のプロパティをprevが何であれ設定します。
ノード変数の値をprevに設定する
ノード変数に次の変数の値を設定する
ループが終了したら、リストを返します。


*/
