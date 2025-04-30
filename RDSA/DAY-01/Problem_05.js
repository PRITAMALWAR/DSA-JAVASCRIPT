function reverseArray(arr)
{
    let i=0;
    let j=arr.length-1;
    while(i<j)
    {
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        i++;
        j--;
    }
    return arr;
}

function reverseArraywithParameter(arr,start,end)
{
    let i=start;
    let j=end;
    while(i<j)
    {
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        i++;
        j--;
    }
    return arr;
}

function rotateArray(arr,k)
{
    // to handle the case when k is greater than the length of the array
    k=k%arr.length; 
    // s1 reverse the whole array
    reverseArraywithParameter(arr,0,arr.length-1);
    // s2 reverse the first k elements
    reverseArraywithParameter(arr,0,k-1);
    // s3 reverse the last n-k elements
    reverseArraywithParameter(arr,k,arr.length-1);
    return arr;
}   

function maximumSumArray(arr)
{
    let maxSum=0;
    let currSum=0;
    for(let i=0;i<arr.length;i++)
    {
        if(currSum<0)
        {
            currSum=arr[i];
        }
        else
        {
            currSum=currSum+arr[i];
        }
        maxSum=Math.max(maxSum,currSum);
    }
    return maxSum;
}


function subArraySumK(arr,k)
{
    let sum=0;
    let map=new Map();

    for(let i=0;i<arr.length;i++)
    {
        sum+=arr[i];
        if(sum==k)
            return true;
        if(map.has(sum-k))
            return true;
        map.add(sum);
    }
    return false;
}


function isPalidrome(arr)
{
    let i=0;
    let j=arr.length-1;
    while(i<j)
    {
        if(arr[i]!=arr[j])
            return false;
        i++;
        j--;
    }
    return true;
}
