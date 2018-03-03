describe('Merge sort ', function(){
  describe('Split Array function', function() {
    it('given one array, return two arrays', function() {
      expect(split([])).toEqual([[],[]]);
    });

    it('split array of even length', function(){
      expect(split([5,10])).toEqual([[5],[10]]);
    })

    it('split array of odd length', function(){
      expect(split([5,10,4])).toEqual([[5],[10,4]])
    })

  });

  describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
      expect(merge([],[])).toEqual([]);
    });

    it('given two already sorted arrays of equal length, will merge',function(){
      expect(merge([1,2,3],[4,5,6])).toEqual([1,2,3,4,5,6])
    });

  });

})





