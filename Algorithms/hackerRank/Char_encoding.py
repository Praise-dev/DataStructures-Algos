def ddd(string):
  count=1
  newStr=""
  if len(string)>1:
    for i in range(1,len(string)):
      if string[i-1]==string[i]:
        count+=1
      else :
        newStr += str(count)+string[i-1]
        count=1
    newStr += str(count)+string[i]
  else:
    i=0
    newStr += str(count)+string[i]
  return(newStr)

print(ddd("rrrrye"));
