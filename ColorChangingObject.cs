using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class NewBehaviourScript : MonoBehaviour
{
    float ColorCode = 1;
   
    void Update()
    {
        ColorCode++; 
        if (ColorCode>1 && ColorCode<100){
            GetComponent<Renderer> ().material.color = Color.red;
        }
        else if (ColorCode>101 && ColorCode<200){
            GetComponent<Renderer> ().material.color = Color.yellow;
        }
        else if (ColorCode>201 && ColorCode<300){
            GetComponent<Renderer> ().material.color = Color.green;
        }
        else if (ColorCode == 301){
            ColorCode = 1; 
        }
    }
}
