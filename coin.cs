using UnityEngine;

public class coin : MonoBehaviour
{
    public int coins = 0;

    void start(){

    }
     void Update(){
       
    }
    
    void OnCollisionEnter(Collision collisionInfo)
    {
       //Debug.Log(collisionInfo.collider.name);
       if(collisionInfo.collider.name == "coin"){
        //Debug.Log("ouch");
        coins = coins+1;
        Debug.Log(coins);
        Destroy(GetComponent<coin>());
        
       
       }
        
    }
    
}