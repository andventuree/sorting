describe('BubbleSort', function(){
  // let bubbleSort;
  const arr = [5,8,2,1,9,10,3,6,4,7]
  beforeAll(function () {
      spyOn(window, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
    });
      // console.log(bubbleSort)
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('calls swap function exactly 1 times given an array of length of 10', function() {
      // spyOn(bubbleSort, swap).and.callThrough();
      // swap(arr);
      expect(swap.calls.count()).toEqual(1)
  });
  it('should expect to be sorted', function() {
      expect(bubbleSort(arr)).toEqual([1,2,3,4,5,6,7,8,9,10])
  })
});
