using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraControl : MonoBehaviour
{
    public GameObject player;
    private Vector3 offset;
    // Start is called before the first frame update
    void Start()
    {
        offset = transform.position - player.transform.position; //finds the distance between the camera and player
    }

    // Update is called once per frame
    void LateUpdate() //late update runs after all the other upadates run
    {
        transform.position = player.transform.position + offset; //makes sure that the camera always stays the right distance from the player
    }
}
