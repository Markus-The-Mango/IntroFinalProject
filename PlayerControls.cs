using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.InputSystem;

public class PlayerControls : MonoBehaviour
{
    public float speed = 0;
    public float torque;
    private Rigidbody rb;

    private float movementX;
    private float movementY;

    // Start is called before the first frame update
    void Start()
    {
        rb = GetComponent<Rigidbody>();
    }

    private void OnMove(InputValue movementValue)
    {
        Vector2 movementVector = movementValue.Get<Vector2>();

        movementX = movementVector.x;
        movementY = movementVector.y;
    }

    private void FixedUpdate()
    {
        Vector3 movement = new Vector3(0.0f, 0.0f, movementY);
        Vector3 turn = new Vector3(0.0f,movementX,  0.0f);
        rb.AddForce(movement * speed);
        //rb.AddTorque( turn * speed);
        transform.Rotate(turn * speed * Time.deltaTime);
        //transform.Rotate(Vector3.up * speed * Time.deltaTime);
    }

}
