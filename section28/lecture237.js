/*

Can we do better?

We sure can! Using a min binary heap

Right now, let's focus on Dijkstra's
もっといいものができないか？
確かにそうだ!minバイナリヒープを使う

今は、Dijkstraの



Dijkstra's Pseudocode

    This function should accept a starting and ending vertex
    Create an object (we'll call it distances) and set each key to be every vertex in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0.
    After setting a value in the distances object, add each vertex with a priority of Infinity to the priority queue, except the starting vertex, which should have a priority of 0 because that's where we begin.
    Create another object called previous and set each key to be every vertex in the adjacency list with a value of null
    Start looping as long as there is anything in the priority queue
        dequeue a vertex from the priority queue
        If that vertex is the same as the ending vertex - we are done!
        Otherwise loop through each value in the adjacency list at that vertex
            Calculate the distance to that vertex from the starting vertex
            if the distance is less than what is currently stored in our distances object
                update the distances object with new lower distance
                update the previous object to contain that vertex
                enqueue the vertex with the total distance from the start node
ダイクストラの擬似コード
この関数は、始点と終点の頂点を受け取る必要があります。
オブジェクトを作り（distancesと呼ぶことにする）、それぞれのキーに、隣接リストのすべての頂点の値をinfinityに設定する。ただし、開始頂点は値0でなければならない。
distances オブジェクトに値を設定した後、優先順位が Infinity の各頂点を優先順位キューに追加します。
previousというオブジェクトを作成し、それぞれのキーに隣接リストのすべての頂点を設定し、値をnullとする
優先度キューに何かある限り、ループを開始する。
優先度キューから頂点をデキューします。
その頂点が終了頂点と同じであれば、終了。
そうでなければ、その頂点にある隣接リストの各値をループします。
開始頂点からその頂点までの距離を計算します。
その距離が、現在 distances オブジェクトに格納されている値より小さい場合
distances オブジェクトを新しい距離で更新します。
その頂点を含むように、前のオブジェクトを更新します。
開始ノードからの総距離を持つ頂点を待ちます。


*/
