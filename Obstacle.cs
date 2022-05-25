using UnityEngine;

public class Obstacle : MonoBehaviour
{
    public int lives = 3;

    void start(){

    }
     void Update(){
        if (lives== 0){
            Debug.Log("dead");
        }
    }
    void OnCollisionEnter(Collision collisionInfo)
    {
       //Debug.Log(collisionInfo.collider.name);
       if(collisionInfo.collider.name == "obstacle"){
        //Debug.Log("ouch");
        lives = lives-1;
        Debug.Log(lives);
       }
    }
    
}
