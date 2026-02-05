<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use App\Entity\Task;
use App\Repository\TaskRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;



final class TaskController extends AbstractController
{
     // route recup task
#[Route('/task', name: 'app_task5', methods:['GET'])]
public function nini(TaskRepository $taskRepository): JsonResponse
{
    $tasks = $taskRepository->findAll();
    
    $data = [];
    foreach ($tasks as $task) {
        $data[] = [
            'id' => $task->getId(),
            'name' => $task->getName(),
            'description' => $task->getDescription(),
            'details' => $task->getDetails()
        ];
    }
    
    return $this->json($data);
}
    
    // route recup task/id
         #[Route('/task/{id}', name: 'app_task4', methods:['GET'])]
    public function niico(Task $task): JsonResponse
    {
          return $this->json([
            'id' => $task->getId(),
            'name' => $task->getName(),
            'description' => $task->getDescription(),
            'details' => $task->getDetails()
        ]);
    }

      // route delete task/id
#[Route('/task/{id}', name: 'app_task3', methods:['DELETE'])]
public function niini(?Task $task, EntityManagerInterface $entityManager): JsonResponse
{
    if (!$task) {
        return $this->json(['error' => 'Task not found'], 404);
    }
    
    $entityManager->remove($task);
    $entityManager->flush();
    
    return $this->json([
        'message' => 'Task deleted successfully',
        'id' => $task->getId()
    ]);
}
   
  
 // route PUT task/id
#[Route('/task/{id}', name: 'app_task2', methods:['PUT'])]
public function nicolas(Task $task, Request $request, EntityManagerInterface $entityManager): JsonResponse
{
    $data = json_decode($request->getContent(), true);
    
    if (isset($data['name'])) {
        $task->setName($data['name']);
    }
    
    if (isset($data['description'])) {
        $task->setDescription($data['description']);
    }
    
    if (isset($data['details'])) {
        $task->setDetails($data['details']);
    }
    
    $entityManager->flush();
    
    return $this->json([
        'message' => 'Task updated successfully',
        'task' => [
            'id' => $task->getId(),
            'name' => $task->getName(),
            'description' => $task->getDescription(),
            'details' => $task->getDetails()
        ]
    ]);
}
//route POST task
#[Route('/task', name: 'app_task1', methods:['POST'])]
public function nicolavic(Request $request, EntityManagerInterface $entityManager): JsonResponse
{
    $data = json_decode($request->getContent(), true);
    
    $task = new Task();
    $task->setName($data['name']);
    $task->setDescription($data['description']);
    $task->setDetails($data['details']);
    
    $entityManager->persist($task);
    $entityManager->flush();
    
    return $this->json([
        'message' => 'Task created successfully',
        'task' => [
            'id' => $task->getId(),
            'name' => $task->getName(),
            'description' => $task->getDescription(),
            'details' => $task->getDetails()
        ]
    ], 201); // Code HTTP 201 = Created
}
}
